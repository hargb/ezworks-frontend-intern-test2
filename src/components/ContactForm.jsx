import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import { toast } from "react-hot-toast";
import "swiper/css";
import "swiper/css/pagination";
import "react-phone-input-2/lib/style.css";

const services = [
  "Graphics & Video",
  "Presentation Design",
  "Language & Communication",
  "Finance & Accounting",
  "Data & Research",
  "Marketing Support",
];

export default function ContactForm() {
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(services[0]);
  const [loading, setLoading] = useState(false);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const cleanedPhone = phone.replace(/[^0-9]/g, ""); // removes -, spaces etc.
    const formattedPhone = `+${cleanedPhone}`;

    const payload = {
      name: data.name.trim(),
      email: data.email.trim(),
      phone: formattedPhone,
      message: data.message.trim(),
      service: selectedService ? [selectedService]: ["Graphics & Video"],
    };

    console.log("Payload to send:", payload); // 🧪 Debug log

    try {
      setLoading(true);
      const res = await fetch("https://test.ezworks.ai/form-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
console.log("API Response:", result);

if (!res.ok) {
  if (result?.detail) {
    console.table(result.detail); // 👈 Log backend validation errors
    toast.error("Validation error. Check console for details.");
  } else {
    toast.error(result?.message || "Submission failed.");
  }
  return;
}

      

      if (res.ok) {
        toast.success("Form submitted successfully!");
        reset();
        setPhone("");
        setSelectedService(services[0]);
      } else {
        toast.error(result?.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center mb-4">Send us a brief</h2>

      <div>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="w-full border rounded p-2"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          placeholder="Email"
          className="w-full border rounded p-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(value) => setPhone(value)}
          inputClass="w-full !p-2 !text-base"
          inputStyle={{ width: "100%" }}
        />
      </div>

      <div>
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Message"
          className="w-full border rounded p-2"
          rows={4}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Select Service</label>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div
                onClick={() => setSelectedService(service)}
                className={`p-3 border rounded-lg text-center cursor-pointer transition ${
                  selectedService === service
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {service}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
