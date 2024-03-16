import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user.id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password"); //all users except loggedIn user

    // Extract unique user IDs from the conversation collection
    // const allChattedUsersByAUser = await Conversation.find({
    //   participants: { $all: [loggedInUserId] },
    // });

    // let users = [];
    // allChattedUsersByAUser.forEach((allParticipants) => {
    //   allParticipants.participants.forEach((participant) => {
    //     if (
    //       participant.toString() !== loggedInUserId &&
    //       !users.includes(participant.toString())
    //     ) {
    //       users.push(participant.toString());
    //     }
    //   });
    // });

    // const usersDetails = await User.find({
    //   _id: users,
    // });
    // console.log("all", allChattedUsersByAUser);
    // console.log("user", usersDetails);
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
