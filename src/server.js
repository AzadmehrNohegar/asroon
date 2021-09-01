import { createServer, Model } from "miragejs";
createServer({
  models: {
    users: Model,
  },
  routes() {
    this.namespace = "api";

    this.get("/users", (schema) => {
      return schema.users.all();
    });
    this.get("/users/:id", (schema, request) => {
      let id = request.params.id;
      return schema.users.find(id);
    });
    this.post("/users", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      schema.users.create({ id: Math.floor(Math.random() * 100), ...attrs });
      return { user: attrs };
    });
    this.delete("/users/:id", (schema, request) => {
      const id = request.params.id;
      return schema.users.find(id).destroy();
    });
    this.get("/users/:id", (schema, request) => {
      let id = request.params.id;
      return schema.movies.find(id);
    });
    this.get("/users/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      console.log(schema.users);
      let users = schema.users.find(id);
      return users.update(newAttrs);
    });
    this.patch("/users/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let users = schema.users.find(id);

      return users.update(newAttrs);
    });
  },
});
