import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    createNotificationTemplate,
    deleteNotificationTemplate, getNotificationTemplateById,
    getNotificationTemplates,
    updateNotificationTemplate
} from "../../api/api";

const initialState = { 
    notificationTemplates: [],
    activeTemplate: null,
    status: null,
}

export const fetchTemplatesThunk = createAsyncThunk(
    'notificationTemplates/fetchTemplatesThunk',
    async () => {
        const response = await getNotificationTemplates()
        return response.data
    }
)

export const fetchTemplateByIdThunk = createAsyncThunk(
    'notificationTemplates/fetchTemplateByIdThunk',
    async (payload, { getState }) => {
        const { notificationTemplates } = getState()
        if (notificationTemplates.activeTemplate) return notificationTemplates.activeTemplate
        const response = await getNotificationTemplateById(payload)
        return response.data
    }
)

export const createTemplateThunk = createAsyncThunk(
    'notificationTemplates/createTemplateThunk',
    async (payload) => {
        const response = await createNotificationTemplate(payload)
        return response.data
    }
)

export const updateTemplateThunk = createAsyncThunk(
    'notificationTemplates/updateTemplateThunk',
    async (payload) => {
        const response = await updateNotificationTemplate(payload?.data, payload?.id)
        return response.data
    }
)

export const deleteTemplateThunk = createAsyncThunk(
    'notificationTemplates/deleteTemplateThunk',
    async (payload) => {
        await deleteNotificationTemplate(payload)
        return payload
    }
)



const notificationTemplatesSlice = createSlice({
    name: 'notificationTemplates',
    initialState,
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload
        },
        setActiveTemplate: (state, action) => {
            state.activeTemplate = state.notificationTemplates.find(item => item.id === action.payload)
        },
    },
    extraReducers: {
        [fetchTemplatesThunk.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchTemplatesThunk.fulfilled]: (state, action) => {
            state.notificationTemplates = action.payload
            state.status = null
        },
        [fetchTemplatesThunk.rejected]: (state, action) => {
            state.status = 'error'
        },
        [fetchTemplateByIdThunk.fulfilled]: (state, action) => {
            state.activeTemplate = action.payload
        },
        [createTemplateThunk.pending]: (state, action) => {
            state.status = 'loading'
        },
        [createTemplateThunk.fulfilled]: (state, action) => {
            state.notificationTemplates.unshift(action.payload)
            state.status = 'successfully'
        },
        [createTemplateThunk.rejected]: (state, action) => {
            state.status = 'error'
        },
        [updateTemplateThunk.pending]: (state, action) => {
            state.status = 'loading'
        },
        [updateTemplateThunk.fulfilled]: (state, action) => {
            state.notificationTemplates = state.notificationTemplates.map(template => {
                if (template.id === action.payload.id) return action.payload
                return template
            })
            state.status = 'successfully'
        },
        [updateTemplateThunk.rejected]: (state, action) => {
            state.status = 'error'
        },
        [deleteTemplateThunk.fulfilled]: (state, action) => {
            state.notificationTemplates = state.notificationTemplates.filter(item => item.id !== action.payload)
        }
    }
})

export default notificationTemplatesSlice.reducer
export const { setStatus, setActiveTemplate } = notificationTemplatesSlice.actions

export const selectNotificationTemplates = (state, searchString) => {
    if (searchString) {
        return state.notificationTemplates.notificationTemplates
            ?.filter(template => template?.title.includes(searchString) || template?.message.includes(searchString))
    }
    return state.notificationTemplates.notificationTemplates

}
export const selectActiveTemplate = (state) => state.notificationTemplates.activeTemplate
export const selectStatus = (state) => state.notificationTemplates.status