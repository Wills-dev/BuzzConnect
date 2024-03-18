import { useEffect, useState } from "react";

import toast from "react-hot-toast";

export const useGetOtherUsers = () => {
  const [loading, setLoading] = useState();
  const [otherUsers, setOtherUsers] = useState([]);

  const getAllOtherUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users`);
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      setOtherUsers(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error?.message) {
        toast.error(`${error.message}`, {
          duration: 4000,
          style: {
            background: "#f74764",
            color: "#fff",
          },
        });
      } else if (error?.error?.message) {
        toast.error(`${error.error.message}`, {
          duration: 4000,
          style: {
            background: "#f74764",
            color: "#fff",
          },
        });
      } else {
        toast.error(`Internal server error`, {
          duration: 4000,
          style: {
            background: "#f74764",
            color: "#fff",
          },
        });
      }
    }
  };

  useEffect(() => {
    getAllOtherUsers();
  }, []);

  return {
    loading,
    otherUsers,
  };
};
