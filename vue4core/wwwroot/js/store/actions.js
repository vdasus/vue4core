import { SET_LANG } from "./const-types";
import axios from 'axios';

export default {
    [SET_LANG](context, lang) {
        axios.get("/Home/JustSetLanguage/?culture=" + lang)
            .then(response => { context.commit(SET_LANG, lang); })
            .catch(e => { });
    }
};