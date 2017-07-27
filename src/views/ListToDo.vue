<template>
    <div>
        <div class="actions">
            <router-link :to="{name: 'task-add'}" class="btn btn-primary"><span class="glyphicon glyphicon-plus"></span>
                Add task
            </router-link>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th class="col-sm-2">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="task in tasks">
                <td>
                    <router-link :to="{ name: 'task', params: {task_id: task.id}}" class="button">{{ task.name }}
                    </router-link>
                </td>
                <td>{{ task.description }}</td>
                <td>
                    {{ task.price }}
                    <span class="glyphicon glyphicon-euro" aria-hidden="true"></span>
                </td>
                <td>
                    <router-link :to="{ name: 'task-edit', params: {task_id: task.id}}" class="button">Edit</router-link>
                    <router-link :to="{ name: 'task-delete', params: {task_id: task.id}}" class="button">Delete
                    </router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    var tasks = require('../tasks');
    module.exports = {
        data: function () {
            return {tasks: tasks};
        }
    }

</script>