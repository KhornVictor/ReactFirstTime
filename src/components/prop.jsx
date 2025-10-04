import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import calculateStat from "./calculateStat";

const ProfileCard = (props) => {
  return (
    <div className="w-100 h-120 flex flex-col gap-0.5 bg-gray-100 rounded-2xl shadow-lg overflow-hidden p-2">
      {/* Cover Image */}
      <div
        className={`h-1/3 mb-2 rounded-xl bg-cover `}
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      ></div>

      {/* Profile Section */}
      <div className="h-2/3 p-6 relative rounded-xl bg-white shadow-sm flex flex-col">
        {/* Profile Avatar */}
        <img
          src={props.image || "https://i.pravatar.cc/150?img=3"}
          alt="Profile"
          className="w-30 h-30 rounded-full border-4 border-white object-cover absolute -top-17 left-6"
        />

        {/* Edit & Actions */}
        <div className="flex justify-end gap-2">
          <button className="px-2 py-1 border rounded-lg text-sm flex items-center gap-1">
            <FiEdit2 />
          </button>
          <button className="p-2 bg-black text-white rounded-lg shadow">
            <FaPlus />
          </button>
          <button className="p-2 border rounded-lg">
            <FiMessageSquare />
          </button>
        </div>

        {/* User Info */}
        <div className="mt-1">
          <h2 className="text-xl font-bold flex items-center gap-1">
            {props.name || "John Doe"}
            <FaCheckCircle className="text-blue-500" />
          </h2>
          <p className="text-gray-500">
            {props.title || "Software Engineer at Google"}
          </p>

          {/* About */}
          <div className="mt-3">
            <h3 className="font-semibold">About</h3>
            <p className="text-sm text-gray-600">
              {props.about ||
                "Enthusiastic developer with a passion for creating innovative solutions and exploring new technologies."}
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-between mt-5 border-t pt-4">
            <div className="text-center">
              <p className="text-xl font-bold">
                {calculateStat(props.posts) || 34}
              </p>
              <p className="text-gray-500 text-sm">Post</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">
                {calculateStat(props.following) || 201}
              </p>
              <p className="text-gray-500 text-sm">Following</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">
                {calculateStat(props.followers) || 300 + "k"}
              </p>
              <p className="text-gray-500 text-sm">Followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
