import { Box, CircularProgress, circularProgressClasses, CircularProgressProps } from "@mui/material"
import { ContainerCircularProgress } from "./styled"

interface Props{
    size: number
}

const CircularLoading = (props: CircularProgressProps) => {
    return (
        <ContainerCircularProgress>

            <Box sx={{ position: 'relative' }}>
                <CircularProgress
                    variant="indeterminate"
                    disableShrink
                    sx={{
                        color: "#06612E",
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                        },
                    }}
                    size={props.size}
                    thickness={4}
                    {...props}
                />
            </Box>
        </ContainerCircularProgress>
    )
}

export default CircularLoading