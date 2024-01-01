const supertest = require("supertest");
const app = require("../index");

describe("Note API Tests", () => {
  let createdNoteId;

  it("should create a new note", async () => {
    const response = await supertest(app)
      .post("/api/notes")
      .send({ title: "Test Note", content: "This is a test note." });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id");
    expect(response.body.title).toBe("Test Note");
    expect(response.body.content).toBe("This is a test note");

    createdNoteId = response.body._id;
  });

  it("should retrieve all notes", async () => {
    const response = await supertest(app).get("/api/notes");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it("should retrieve a single note by ID", async () => {
    const response = await supertest(app).get(`/api/notes/${createdNoteId}`);

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(createdNoteId);
  });

  it("should update a note", async () => {
    const response = await supertest(app)
      .put(`/api/notes/${createdNoteId}`)
      .send({
        title: "Updated Test Note",
        content: "This is an updated test note.",
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe("Updated Test Note");
    expect(response.body.content).toBe("This is an updated test note.");
  });

  it("should delete a note", async () => {
    const response = await supertest(app).delete(`/api/notes/${createdNoteId}`);

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(createdNoteId);
  });

  it("should handle 404 for non-existent note retrieval", async () => {
    const response = await supertest(app).get("/api/notes/nonexistentid");

    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Note not found");
  });

  it("should handle 404 for non-existent note update", async () => {
    const response = await supertest(app).put("/api/notes/nonexistentid").send({
      title: "Updated Test Note",
      content: "This is an updated test note.",
    });

    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Note not found");
  });

  it("should handle 404 for non-existent note deletion", async () => {
    const response = await supertest(app).delete("/api/notes/nonexistentid");

    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Note not found");
  });
});
