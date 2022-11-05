import { Button, ButtonGroup } from "react-bootstrap";

export default function PostListItem({ data, deleteRecord }) {
  const deleteHandler = (item) => {
    if (window.confirm(`Do YOu Want To Delete Post ${item.title} ?`)) {
      deleteRecord(item.id);
    }
  };
  return (
    <>
      {data.map((ele, index) => (
        <tr key={index}>
          <td>#{++index}</td>
          <td>{ele.title}</td>
          <td>
            <ButtonGroup aria-label="Basic example">
              <Button variant="success">Edit</Button>
              <Button variant="danger" onClick={() => deleteHandler(ele)}>
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      ))}
    </>
  );
}
