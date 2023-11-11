const Home = {
  template: `
      <div class="right-box">
        <div class="center">
          <h1>欢迎来到 Windows 系统模拟</h1>
        </div>
      </div>
    `,
};

const Windows = {
  template: `
      <div class="right-box">
        <div class="top">
          <span class="current-tag">Windows</span>
        </div>
        <div class="center">
          <a class="btn" href="/win10/shutdown.html">关机页面</a>
        </div>
      </div>
    `,
};

const MacOS = {
  template: `
      <div class="right-box">
        <div class="top">
          <span class="current-tag">MacOS</span>
        </div>
        <div class="middle">正在开发中</div>
      </div>
    `,
};

const Android = {
  template: `
      <div class="right-box">
        <div class="top">
          <span class="current-tag">Android</span>
        </div>
        <div class="middle">正在开发中</div>
      </div>
    `,
};

const iOS = {
  template: `
      <div class="right-box">
        <div class="top">
          <span class="current-tag">iOS</span>
        </div>
        <div class="middle">正在开发中</div>
      </div>
    `,
};

const About = {
  template: `
      <div class="right-box">
        <div class="top">
          <span class="current-tag">关于</span>
        </div>
        <div class="middle">正在开发中</div>
      </div>
    `,
};

const routes = [
  { path: "/", component: Home },
  { path: "/win", component: Windows },
  { path: "/mac", component: MacOS },
  { path: "/android", component: Android },
  { path: "/ios", component: iOS },
  { path: "/about", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({});

app.use(router);

app.mount("#app");
