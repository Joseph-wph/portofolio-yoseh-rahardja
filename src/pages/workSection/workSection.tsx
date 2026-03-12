import Form from "@/components/form/form";

const workSection = () => {
  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-5 p-5 font-heading">
      <div className="flex flex-col p-5 gap-4">
        <h1 className="font-bold text-[36px] text-left">Let’s Work Together</h1>
        <p className="text-[16px] text-left leading-8">
          Have a project in mind or just want to say hi? Drop me a message — I’d
          love to hear from you.
        </p>
        <div className="flex justify-center items-center">
          <img
            src="/assets/portofolio/allPortofolio.svg"
            alt="All Portofolio"
            className="w-200"
          />
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center mt-15">
        <img
          src="/assets/image/beardman.svg"
          alt="beardman"
          className="absolute -top-16 z-10 w-50"
        />
        <section className="mt-20">
          <Form />
        </section>
      </div>
    </div>
  );
};

export default workSection;