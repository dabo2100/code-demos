// Import Swiper React components
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCashRegister } from 'react-icons/fa';
import s1 from '../assets/Career.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Field, Formik, Form } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  let domain = 'http://localhost:1337';
  let endpoint = '/api/auth/local';
  let url = domain + endpoint;

  const navigate = useNavigate();

  const addNewCat = () => {
    let url = domain + '/api/products';
    axios
      .post(url, {
        data: {
          name: 'iPhone 16',
          price: 600,
          category : ['qg14nlsmvkpewrm4y75g8noo']
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  const handleregister = (values) => {
    let url = domain + '/api/auth/local/register';
    axios.post(url, {
      email: values.email,
      username: 'Abdel-fattah',
      password: values.password,
    });
  };

  const handleLogin = (values) => {
    axios
      .post(url, {
        identifier: values.email,
        password: values.password,
      })
      .then((res) => {
        let token = res.data.jwt;
        console.log(res.data);
        console.log(token);
      });
    console.log(values);
  };
  return (
    <div className="w-full h-full flex flex-wrap ">
      <div className="w-1/2 h-full flex flex-col bg-[#f5f5f2]">
        <div className="w-full flex p-5 gap-2 items-center">
          <FaCashRegister className="text-[var(--redColor)]" />
          <h1 className="font-bold text-black">
            smart<span className="text-[var(--redColor)]">Pos</span>
          </h1>
        </div>
        <div className="w-full grow ">
          <Swiper pagination={{ clickable: true }} autoplay={{ delay: 2500, disableOnInteraction: false }} className="h-full" modules={[Pagination, Autoplay]} spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <img src={s1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={s1} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="w-1/2 h-full bg-green-500">
        <Formik onSubmit={addNewCat} initialValues={{ email: '', password: '' }}>
          <Form className="flex flex-col gap-3">
            <Field type="text" name="email" className="input" placeholder="Enter your email" />
            <Field type="text" name="password" className="input" placeholder="Enter your password" />
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
