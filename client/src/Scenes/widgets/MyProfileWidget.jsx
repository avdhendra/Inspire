import { EditOutlined, DeleteOutlined, AttachFileOutline, GifBoxOutline, ImageOutlined, MicOutlined, MoreHorizOutlined } from '@mui/icons-material'
import { Box, Divider, Typography, InputBase, useTheme, Button, IconButton, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import { useDispatch } from 'react-redux'
import FlexBetween from '../../Components/FlexBetween'
import UserImage from '../../Components/UserImage'
import { WidgetWrapper } from '../../Components/WidgetWrapper'

