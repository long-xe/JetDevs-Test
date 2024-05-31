import { getUserApi } from "../../../src/api/user/user.api";
import { API } from "../../../src/configs/instances";

jest.mock('../../../src/configs/instances', () => ({
  API: {
    get: jest.fn((path: string) => {
      if (
        path ===
        `/api/?page=0&results=10`
      ) {
        return Promise.resolve({
          data: true,
        });
      }
    }),
  },
}));

describe('Test Users Apis', () => {
  it('Test get user', async () => {
    const response = await getUserApi();
    expect(response.data).toBe(true);
  });
});
