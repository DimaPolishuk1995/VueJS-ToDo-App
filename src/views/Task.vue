<template>
    <div>
        <h2>{{ task.name }}</h2>
        <b>Description: </b>
        <div>{{ task.description }}</div>
        <b>Price:</b>
        <div>{{ task.price }}<span class="glyphicon glyphicon-euro"></span></div>
        <br/>
        <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
        <a v-link="'/'">Back to task list</a>
    </div>
</template>

<script>
    var tasks = require('../tasks');

    function findTask (taskId) {
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
            return {task: findTask(this.$route.params.task_id)};
        }
    }
</script>