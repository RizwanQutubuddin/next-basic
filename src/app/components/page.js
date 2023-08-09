"use client";
export default function DeleteUser(props) {
  console.log("id", props.id);
  const deleteUser = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${props.id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result.success) {
      alert(result.result);
    } else {
      alert("not delete");
    }
  };

  return <button onClick={deleteUser}>Delete</button>;
}
