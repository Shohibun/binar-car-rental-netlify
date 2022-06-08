import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import Navbar from './components/Navbar';
import Jumbotron from './pages/Jumbotron';
import Main from './pages/Main';
import Feature from './pages/Feature';
import Chart from './pages/Chart';

describe("Make sure navbar has the look it should have", () => {
  test("Make sure navbar has a button for our services:", () => {
    const component = render(<Navbar />);
    const buttonService = component.getByText("Our Service");
    expect(buttonService).toBeInTheDocument();
  });

  test("Make sure navbar has a button for why us:", () => {
    const component = render(<Navbar />);
    const buttonUs = component.getByText("Why Us");
    expect(buttonUs).toBeInTheDocument();
  });

  test("Make sure navbar has a button for testimonial:", () => {
    const component = render(<Navbar />);
    const buttonTestimonial = component.getByText("Testimonial");
    expect(buttonTestimonial).toBeInTheDocument();
  });

  test("Make sure navbar has a button for faq:", () => {
    const component = render(<Navbar />);
    const buttonFaq = component.getByText("FAQ");
    expect(buttonFaq).toBeInTheDocument();
  });

  test("Make sure navbar has a button for register:", () => {
    const component = render(<Navbar />);
    const buttonRegister = component.getByText("Register");
    expect(buttonRegister).toBeInTheDocument();
  });
});

describe("Make sure jumbotron has the look it should have", () => {
  test("Make sure jumbotron has a title:", () => {
    const component = render(<Jumbotron />);
    const title = component.getByText("Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)");
    expect(title).toBeInTheDocument();
  })

  test("Make sure jumbotron has a text introduction:", () => {
    const component = render(<Jumbotron />);
    const textIntroduction = component.getByText("Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.");
    expect(textIntroduction).toBeInTheDocument();
  });

  test("Make sure jumbotron has a button for sewa mobi:", () => {
    const component = render(<Jumbotron />);
    const buttonSewaMobil = component.getByText("Mulai Sewa Mobil");
    expect(buttonSewaMobil).toBeInTheDocument();
  });
});

describe("Make sure main has the look it should have", () => {
  test("Make sure main has a title:", () => {
    const component = render(<Main />);
    const title = component.getByText("Best Car Rental for any kind of trip in (Lokasimu)!");
    expect(title).toBeInTheDocument();
  });

  test("Make sure main has a paragph:", () => {
    const component= render(<Main />);
    const paragph = component.getByText("Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.");
    expect(paragph).toBeInTheDocument();
  });

  test("Make sure main has a text benefits:", () => {
    const component= render(<Main />);
    const textBenefits = component.getByText("Sewa Mobil Dengan Supir di Bali 12 Jam");
    expect(textBenefits).toBeInTheDocument();
  });
});

describe("Make sure feature has the look it should have", () => {
  test("Make sure feature has a title:", () => {
    const component = render(<Feature />);
    const title = component.getByText("Why Us?");
    expect(title).toBeInTheDocument();
  });

  test("Make sure feature has a sub title:", () => {
    const component = render(<Feature />);
    const subTitle = component.getByText("Mobil Lengkap");
    expect(subTitle).toBeInTheDocument();
  });

  test("Make sure main has a text benefits:", () => {
    const component= render(<Feature />);
    const textBenefits = component.getByText("Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat");
    expect(textBenefits).toBeInTheDocument();
  });
});
