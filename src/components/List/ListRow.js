import React, { useState, Fragment } from "react";
import moment from "jalali-moment";
import Edit from "../../images/download.png";
import Delete from "../../images/icon-delete-16.jpg";
import Modal from "react-modal";
import axios from "axios";
import { useHistory } from "react-router-dom";
const ListRow = ({ id, name, tel, email, age, forceReload, isListed }) => {
  const history = useHistory();
  const [Open, setOpen] = useState(false);
  const deleteRow = () => {
    axios
      .delete(`/api/users/${id}`)
      .then(() => setOpen(false))
      .then(() => forceReload(true));
  };
  const editPage = () => {
    history.push(`/edit/${id}`);
  };
  return (
    <Fragment>
      {!isListed && (
        <Modal
          isOpen={Open}
          onRequestClose={() => setOpen(false)}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            },
            content: {
              textAlign: "right",
              position: "absolute",
              maxWidth: "100%",
              maxHeight: "100%",
              width: "25%",
              height: "20%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <div className="modal-content">
            <i className="close-btn" onClick={() => setOpen(false)}>
              &#10005;
            </i>
            <h3>حذف ردیف</h3>
            <span>ایا از حذف این ردیف مطمئن هستید؟</span>
            <button onClick={deleteRow} className="delete-btn">
              حذف
            </button>
          </div>
        </Modal>
      )}

      <tr>
        <td>{name}</td>
        <td>{tel}</td>
        <td>{age}</td>
        <td>{email}</td>
        <td>{moment().locale("fa").format("YYYY/MM/DD")}</td>
        <td>
          {!isListed && (
            <button onClick={() => editPage()}>
              <img src={Edit} alt="edit" />
            </button>
          )}
        </td>
        <td>
          {!isListed && (
            <button onClick={() => setOpen(true)}>
              <img src={Delete} alt="delete" />
            </button>
          )}
        </td>
      </tr>
    </Fragment>
  );
};

export default ListRow;
