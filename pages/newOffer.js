import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const newOffer = () => {
  return (
    <>
      <Header />
      <form>
        <div>
          <input type="text" />
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
      <Modal />
      <Footer />
    </>
  );
};

export default newOffer;
