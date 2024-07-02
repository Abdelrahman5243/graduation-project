import React, { useState, useEffect } from "react";
import { useGetAdmins } from "./useGetAdmins";
import axios from "axios";
import { handleAddAdmin } from "./handleAddAdmin";
import Loader from "../Loader/Loader";

const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";
const token = localStorage.getItem("token") || undefined;

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await axios.get(`${API_BASE_URL}/user/admin-users?sort=user`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(data);
        setUsers(data.data.users);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    const fetchPremium = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await axios.get(`${API_BASE_URL}/user/admin-users?sort=premium`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUsers([data.data.users, ...users]);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    fetchPremium();
  }, []);
  console.log(users);
  return (
    <div className="p-6 border rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-[#BB5CB9] mb-4 mt-12 border-b-4 border-[#BB5CB9] w-fit pb-1">Users' Accounts</h2>
      {loading && !error && <Loader />}
      {error && <p className="mt-24 text-2xl text-red-700">Some Error Occured</p>}
      {!loading && !error && (
        <div>
          {users?.map((user) => (
            <div key={user._id}>
              <div className="flex items-center">
                <div>
                  <label className="text-[#350E5C] text-xl ">Name</label>
                  <p className="text-[#350E5C] text-xl ">{user?.name}</p>
                </div>
                <div>
                  <label className="text-[#350E5C] text-xl ">Email</label>
                  <p className="text-[#350E5C] text-xl ">{user?.email}</p>
                </div>
                <div>
                  <label className="text-[#350E5C] text-xl ">Role</label>
                  <p className="text-[#350E5C] text-xl ">{user?.role}</p>
                </div>
                <div>
                  <label className="text-[#350E5C] text-xl ">Status</label>
                  <p className="text-[#350E5C] text-xl ">{user?.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
