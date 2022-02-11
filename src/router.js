import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Product from '@/components/Product.vue';
import Services from '@/components/Services.vue';
import NewProduct from '@/components/NewProduct.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import NotFound from '@/components/NotFound.vue';
import Experiment from '@/components/Experiment.vue';
import PrivacyPolicy from '@/components/PrivacyPolicy.vue';
import Enquiry from '@/components/Enquiry.vue';
import SmallBusiness from '@/components/SmallBusiness.vue';
import SmallMediumBusiness from '@/components/SmallMediumBusiness.vue';
import Restaurannt from '@/components/Restaurant.vue';
import Blog from '@/components/blogs/Blog.vue';
import PasserbySmallBusiness from '@/components/blogs/PasserbySmallBusiness.vue'




const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/product', name: 'Product', component: Product },
    { path: '/services', name: 'Services', component: Services },
    { path: '/newproduct', name: 'NewProduct', component: NewProduct },
    {path: '/about', name: 'About', component: About},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/experiment', name: 'Experiment', component: Experiment},
    {path: '/privary-policy', name: 'PrivacyPolicy', component: PrivacyPolicy},
    {path: '/enquiry', name: 'Enquiry', component: Enquiry},
    {path: '/smallbusiness', name: 'SmallBusiness', component: SmallBusiness},
    {path: '/sme', name: 'SmallMediumBusiness', component: SmallMediumBusiness},
    {path: '/restaurant', name: 'Restaurant', component: Restaurannt},
    {path: '/blogs', name: 'Blog', component: Blog },
    {path: '/blogs/passerby-small-business', name: 'PasserbySmallBusiness', component: PasserbySmallBusiness },
    { path: '/:notFound(.*)', name: 'Notfound', component: NotFound }
  ]
});

router.beforeEach(function(to, from,  next) {
    next();
});


export default router;

