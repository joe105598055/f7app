
import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';
import MenuPage from '../pages/menu.vue';
import ProductPage from '../pages/product.vue';
import SettingsPage from '../pages/settings.vue';

import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';
import createMeal from '../pages/createMeal.vue'
import mealTable from '../pages/mealTable.vue'

import createSet from '../pages/createSet.vue'
import Meal from '../pages/meal.vue'
import OrderPage from '../pages/Order.vue'
import FlavorPage from '../pages/flavor.vue'
import CouponPage from '../pages/coupon.vue'
import ReportPage from '../pages/report.vue'


var routes = [
  {
    path: '/',
    component: HomePage,
    // component: FlavorPage
  },
  {
    path: '/report',
    component: ReportPage
  },
  {
    path: '/coupon',
    component: CouponPage
  },
  {
    path: '/flavor',
    component: FlavorPage
  },
  {
    path: '/order',
    component: OrderPage
  },
  {
    path: '/menu',
    component: MenuPage
  },
  {
    path: '/createMeal',
    component: createMeal
  },
  {
    path: '/mealTable',
    component: mealTable
  },
  {
    path: '/meal',
    component: Meal,
  },
  {
    path: '/createSet',
    component: createSet,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },

  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
