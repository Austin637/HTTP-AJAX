import React from "react";

const FriendForm = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="age" placeholder="Age" />
        <input type="email" name="email" placeholder="Email" />
        <button>Add friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
