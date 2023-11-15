import { useEffect, useState } from "react";
import { supabase } from "../../../../supabase/supabase";
import _Hanko from "../../../../hanko/hanko";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const hanko = _Hanko.hankoInstance();

const CompleteSignupVerification = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch User Email From Hanko when the component mounts.
    const userEmail = async () => {
      try {
        const { email } = await hanko.user.getCurrent();
        if (email) {
          setEmail(email);
        }
      } catch (error) {
        toast.error("Sorry! There is a problem while fetching... try again");
      }
    };

    userEmail();
  }, []); // Use an empty dependency array to ensure this effect runs only once.

  const handleEmailVerification = async (event) => {
    event.preventDefault();

    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: "http://localhost:5173/user/dashboard/:home",
        },
      });

      if (error) {
        toast.error(error.error_description || error.message);
      } else {
        toast.success("Thanks! Check your email for confirmation");
      }
    } catch (error) {
      toast.error("An error occurred during email verification.");
    }

    setLoading(false);
  };

  const deleteUserEmail = () => {
    // Unsubscribe the user from Hanko when deleting.
    const beforeDelete = () => {
      swal({
        title: "Are you sure?",
        text: "This action will delete your email address from our lists.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          try {
            await hanko.user.logout();
            navigate("/login", { replace: true });
          } catch (error) {
            toast.error("An error occurred while deleting the user.");
          }
        }
      });
    };

    beforeDelete();
  };

  return (
    <section
      className={`bg-hero w-full h-screen absolute top-0 left-0 flex flex-col items-center justify-center px-2 ${
        email ? null : "blur-sm"
      }`}
    >
      <div className="bg-white p-5 rounded-2xl flex flex-col items-center justify-center max-w-4xl shadow gap-2">
        <h1 className="font-poppins text-2xl font-bold text-nav-blue mb-3">
          Email Verification
        </h1>
        <p className="text-sm font-serif text-dark-blue font-medium tracking-wider">
          Confirm this Email Address for verification
        </p>
        <form className="w-full py-2" onSubmit={handleEmailVerification}>
          <input
            className="w-full border-none outline-none bg-info text-base font-poppins font-medium rounded"
            type="email"
            placeholder="Your email"
            value={email}
            disabled
          />
          <button
            className="my-3 bg-black text-base text-center font-poppins text-white w-full px-4 py-3 rounded transition-colors duration-500 hover:bg-dark-blue"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <i className="bx bx-bullseye bx-spin bx-sm"></i>
              </span>
            ) : (
              <span>Verify Email</span>
            )}
          </button>
        </form>
        <div className="self-end cursor-pointer border-b pb-1">
          <button
            className="text-sm font-poppins font-medium hover:text-nav-blue hover:font-semibold"
            onClick={deleteUserEmail}
          >
            Back to login?
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompleteSignupVerification;
