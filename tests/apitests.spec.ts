import { test, expect, APIResponse } from "@playwright/test";
const data = { name: "Vadym", job: "zion resident" };
const completed = { completed: true };

test("update user - patch", async ({ request }) => {
  const updateUser = await request.patch("https://reqres.in/api/users/2", {
    data: {
      name: "Vadym",
      job: "zion resident",
    },
  });
  const body = await updateUser.json();

  expect(body.name).toEqual("Vadym");
  expect(body.job).toEqual("zion resident");
});

test("delete user", async ({ request }) => {
  const deleteUser = await request.patch("https://reqres.in/api/users/2", {
    data: {
      name: "Vadym",
      job: "zion resident",
    },
  });
  expect(deleteUser.status()).toBe(200);
});

test("put request", async ({ request }) => {
  const putRequest = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "Vicky",
      job: "non-zion resident",
    },
  });
  const body = await putRequest.json();
  expect(putRequest.status()).toBe(200);
  expect(body.name).toEqual("Vicky");
  expect(body.job).toEqual("non-zion resident");
  expect(body.updatedAt).toBeTruthy();
});

//put delete, pathch
