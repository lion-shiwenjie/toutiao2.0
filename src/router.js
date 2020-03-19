import vue from 'vue';

import VueRouter from 'vue-router';

vue.use(VueRouter)

import Login from './views/login/index.vue';
import Index from './views/home/index.vue';
import Welcome from './views/welcome/index.vue';
import Article from './views/article/index.vue';
import Image from './views/image/index.vue';
import Publish from './views/publish/index.vue';
import Comments from './views/comment/index.vue';
import Fans from './views/fans/index.vue';
import Setting from './views/setting/index.vue';

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: Index,
            children: [
                {
                    path: '',
                    component: Welcome
                }, {
                    path: 'article',
                    component: Article
                },
                {
                    path: 'image',
                    component: Image
                },
                {
                    path: 'publish',
                    component: Publish
                }
                ,
                {
                    path: 'comment',
                    component: Comments
                }
                ,
                {
                    path: 'fans',
                    component: Fans
                }
                ,
                {
                    path: 'setting',
                    component: Setting
                }
            ]
        }
    ]
})

export default router