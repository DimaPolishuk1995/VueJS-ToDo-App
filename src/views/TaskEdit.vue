<template>
    <div>
        <h2>Edit task</h2>
        <form>
            <div class="form-group">
                <label for="edit-name">Name</label>
                <input class="form-control" id="edit-name" v-model="task.name" required/>
            </div>
            <div class="form-group">
                <label for="edit-description">Description</label>
                <textarea class="form-control" id="edit-description" rows="3" v-model="task.description"></textarea>
            </div>
            <div class="form-group">
                <label for="edit-price">Price, <span class="glyphicon glyphicon-euro"></span></label>
                <input type="number" class="form-control" id="edit-price" v-model="task.price"/>
            </div>
            <button @click="updateTask()" type="submit" class="btn btn-primary">Save</button>
            <a v-link="'/'" class="btn btn-default">Cancel</a>
        </form>
    </div>
</template>

<script>
    var tasks = require('../tasks');

    function findtask (taskId) {
        return tasks[findTaskKey(taskId)];
    }

    function findTaskKey (taskId) {
        for (var key = 0; key < tasks.length; key++) {
            if (tasks[key].id == taskId) {
                return key;
            }
        }
    }
    module.exports = {
        data: function () {
            return {task: findtask(this.$route.params.task_id)};
        },
        methods: {
            updateTask: function () {
                var task = this.task;
                tasks[findTaskKey(task.id)] = {
                    id: task.id,
                    name: task.name,
                    description: task.description,
                    price: task.price
                };
                this.$router.push('/')
            }
        }
    }
</script>