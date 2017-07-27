<template>
  <div>
    <h2>Add new task</h2>
    <form v-on:submit="createTask">
      <div class="form-group">
        <label for="add-name">Name</label>
        <input class="form-control" id="add-name" v-model="task.name" required/>
      </div>
      <div class="form-group">
        <label for="add-description">Description</label>
        <textarea class="form-control" id="add-description" rows="10" v-model="task.description"></textarea>
      </div>
      <div class="form-group">
        <label for="add-price">Price, <span class="glyphicon glyphicon-euro"></span></label>
        <input type="number" class="form-control" id="add-price" v-model="task.price"/>
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
      <router-link :to="{name: 'home'}" class="btn btn-default">
        Cancel
      </router-link>
    </form>
  </div>
</template>

<script>
  var tasks = require('../tasks');
  module.exports = {
    data: function () {
      return {
        task: {name: '', description: '', price: ''}
      }
    },
    methods: {
      createTask: function () {
        var task = this.task;
        tasks.push({
          id: Math.random().toString().split('.')[1],
          name: task.name,
          description: task.description,
          price: task.price
        });
        this.$router.push('/')
      }
    }
  }
</script>