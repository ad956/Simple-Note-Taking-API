const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Note Controller", () => {
  it("should create a new note", async () => {
    const res = await chai
      .request(app)
      .post("/api/notes")
      .send({ title: "Test Note", content: "This is a test note." });

    expect(res).to.have.status(200);
    expect(res.body).to.be.an("object");
    expect(res.body.title).to.equal("Test Note");
    expect(res.body.content).to.equal("This is a test note.");
  });
});
