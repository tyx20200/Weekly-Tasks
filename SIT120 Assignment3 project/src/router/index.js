import VueRouter from "vue-router";
import Character from "../components/Character.vue"
import Region from "../components/Region.vue"
import Home from "../components/Home.vue"
import Login from "../components/Login.vue"
import Signup from "../components/Signup.vue"
import Join from "../components/Join.vue"

export default new VueRouter({
    routes:[
        { path:"/character",
        component:Character
        },
       
        { path:"/region",
        component:Region
        },
        { path:"/home",
        component:Home
        },
        { path:"/join",
        component:Join
        },
        { path:"/login",
        component:Login
        },
        { path:"/signup",
        component:Signup
        },
    ]
})