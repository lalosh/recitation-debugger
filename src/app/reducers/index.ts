import { quranReducer } from './quran';
import { usersReducer } from './users';
import { pageReducer } from './page';
import { currentUserReducer } from './current-user';

export const rootReducer = {
    quran: quranReducer,
    users: usersReducer,
    page: pageReducer,
    currentUser: currentUserReducer,
    
}