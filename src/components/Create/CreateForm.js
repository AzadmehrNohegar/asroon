import React from "react";
const CreateForm = ({ changeCredentials, createUser, initialValue }) => {
  return (
    <div className="create-form">
      <h3>فرم زیر را پر کنید</h3>
      <form method="POST">
        <label>نام و نام خانوادگی</label>
        <input
          name="name"
          type="text"
          defaultValue={initialValue && initialValue.name}
          placeholder="نام و نام خانوادگی شما"
          onChange={(e) => changeCredentials("name", e.target.value)}
        />
        <label>شماره موبایل</label>
        <input
          name="tel"
          type="tel"
          defaultValue={initialValue && initialValue.tel}
          placeholder="شماره موبایل"
          onChange={(e) => changeCredentials("tel", e.target.value)}
        />
        <label>سن</label>
        <input
          name="age"
          type="number"
          defaultValue={initialValue && Number(initialValue.age)}
          placeholder="سن شما"
          onChange={(e) => changeCredentials("age", e.target.value)}
        />
        <label>ایمیل</label>
        <input
          name="email"
          type="email"
          placeholder="ایمیل شما"
          defaultValue={initialValue && initialValue.email}
          onChange={(e) => changeCredentials("email", e.target.value)}
        />
        <input type="submit" value="ساخت اکانت" onClick={createUser} />
      </form>
    </div>
  );
};

export default CreateForm;
