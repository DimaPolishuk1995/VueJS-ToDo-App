<template>
    <div>
        <h2>Delete task {{ task.name }}</h2>
        <form>
            <p>The action cannot be undone.</p>
            <button @click="deleteTask()" type="submit" class="btn btn-danger">Delete</button>
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
            deleteTask: function () {
                task.splice(findTaskKey(this.$route.params.task_id), 1);
                router.go('/');
            }
        },
        created: function () {
            this.deleteTask()
        }
    }
</script>