import { useParams } from "react-router-dom";
import ChangePasswordForm from "../components/ChangePasswordForm";

const NewPassword = () => {
  const { token } = useParams();

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-cover bg-[url('https://images.pexels.com/photos/2078076/pexels-photo-2078076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
      <ChangePasswordForm token={token} />
    </div>
  );
};

export default NewPassword;
