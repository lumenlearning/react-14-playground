"use strict";
module.exports  = new class Index{
  constructor(){

    this.options = {
      method: ['GET', 'POST', 'PUT', 'DELETE'],
      path: "/api/todos",
      handler: {todos:{}}
    }

  }

  getHandler(){
    const fs = require('fs');

    var register = function(Server, options, next){
      var todos = require(__dirname + '/../../assets/data/todo.js');

      var handler = function(route, options){

        return function (req, res){

          console.log("METHOD:", req.method);

          switch(req.method){
            case "get":
              res(todos)
                .type("application/json");
              break;

            case "post":
              let newTodo = _.merge(req.payload, {_id: todos.length});
              todos.names.push(newTodo);

              res(newTodo)
                .type("application/json");
              break;
          }

        }

      };

      Server.handler("todos", handler);
      next();
    };

    register.attributes = {
      name: "handler-todos",
      version: "1.0.0"
    };

    return register;

  } //handler

  getOptions(){

    return this.options;
  }

};