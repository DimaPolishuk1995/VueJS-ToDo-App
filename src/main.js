var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

var ListToDo = require('./views/ListToDo.vue');
var Task = require('./views/Task.vue');
var AddTask = require('./views/AddTask.vue');
var TaskEdit = require('./views/TaskEdit.vue');
var TaskDelete = require('./views/TaskDelete.vue');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter({
  routes: [
    {path: '/', name: 'home', component: ListToDo},
    {path: '/task/:task_id', name: 'task', component: Task},
    {path: '/add-task', name:'task-add', component: AddTask},
    {path: '/task/:task_id/edit', name: 'task-edit', component: TaskEdit},
    {path: '/task/:task_id/delete', name: 'task-delete', component: TaskDelete}
  ]
});

new Vue({
  el: '#app',
  router: router
});