
function UserListItem(props) {
    return (
      <div className="list-item">
        <img src={props.data.avatar} alt={props.id} />
        <div className="list-item-details">
          <p>{`Name: ${props.data.first_name} ${props.data.last_name}`}</p>
          <p>{`User ID: ${props.data.id}`}</p>
          <p>{`Email: ${props.data.email}`}</p>
        </div>
      </div>
    );
}

export default UserListItem;