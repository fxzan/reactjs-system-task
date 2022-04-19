import React from "react";
import UserListItem from "./UserListItem";

function sortList(userList, isAscending) {
  return userList.sort((userA, userB) => {
    if (isAscending) {
      return userA.id > userB.id ? 1 : -1;
    } else {
      return userA.id < userB.id ? 1 : -1;
    }
  });
}

function UserList() {
  const [usersList, setUsersList] = React.useState([]);
  const [isAscending, setIsAscending] = React.useState(true);

  const fetchUserList = React.useCallback(async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      if (!response.ok) {
        const errorStatus = response.status;
        const data = response.json();
        throw new Error(`${errorStatus} ${data.error}`);
      }
      const data = await response.json();
      setUsersList(data.data);
    } catch (error) {
      alert(error);
    }
  }, []);

  React.useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);

  function changeSortingHandler() {
    setIsAscending((prev) => !prev);
  }

  const sortedUsersList = sortList(usersList, isAscending);

    const content = sortedUsersList.map((user) => <UserListItem key={user.id} data={user} />);

  return (
    <>
      <button onClick={changeSortingHandler}>
        Sort: {isAscending ? "Descending" : "Ascending"}
      </button>
      <div className="list-container">{content}</div>
    </>
  );
}

export default UserList;
