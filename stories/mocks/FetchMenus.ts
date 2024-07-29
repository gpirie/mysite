// mockFetchMenus.js
import { mainMenuMockData} from "../data/mockData";

export const fetchMenus = async (menuName: any) => {
    if (menuName === 'MAIN_MENU') {
        return mainMenuMockData;
    }
    return [];
};
