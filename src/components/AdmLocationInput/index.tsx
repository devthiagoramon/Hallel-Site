import { IconButton, TextField, TextFieldProps } from "@mui/material";
import {
    Libraries,
    StandaloneSearchBox,
    useJsApiLoader,
} from "@react-google-maps/api";
import { MapPin } from "phosphor-react";
import { useState } from "react";
import { CSSProperties } from "styled-components";
import { LocationMapType } from "types/admDTOTypes";
import { AdmLocationInputContainer } from "./style";

interface AdmLocationInputProps {
    containerStyle?: CSSProperties;
    inputStyle?: CSSProperties;
    onPlaceSelect: (place: string) => void;
    onLocationSelect?: (location: LocationMapType) => void;
    place: string;
    textFieldProps?: TextFieldProps;
}

const libraries: Libraries = ["places"];

const LOCALIZATION_TOKEN =
    process.env.REACT_GOOGLE_LOCALIZATION_API_KEY;

const AdmLocationInput = ({
    containerStyle,
    inputStyle,
    onPlaceSelect,
    onLocationSelect,
    place,
    textFieldProps,
}: AdmLocationInputProps) => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: LOCALIZATION_TOKEN || "AIzaSyBoQSGAODRYh9JPoxy0tM5NO59Xre5GxnA",
        libraries: libraries,
        id: "google-maps-script",
        language: "pt-BR",
        region: "BR",
    });
    const [searchBox, setSearchBox] =
        useState<google.maps.places.SearchBox>();

    const [inputLocation, setInputLocation] =
        useState<LocationMapType>();

    const onLoad = (ref: google.maps.places.SearchBox) => {
        setSearchBox(ref);
    };

    const onPlacesChanged = () => {
        if (searchBox) {
            const places = searchBox.getPlaces();
            if (places) {
                const place = places[0];
                const location = {
                    lat: place?.geometry?.location?.lat() || 0,
                    lng: place?.geometry?.location?.lng() || 0,
                };
                onPlaceSelect(place.formatted_address || "");
                onLocationSelect && onLocationSelect(location);
                setInputLocation(location);
            }
        }
    };

    const handleRedirectToPlace = () => {
        window.open(
            `https://www.google.com/maps?q=${inputLocation?.lat},${inputLocation?.lng}`,
        );
    };

    return (
        <AdmLocationInputContainer>
            {isLoaded ? (
                <StandaloneSearchBox
                    onLoad={onLoad}
                    onPlacesChanged={onPlacesChanged}
                >
                    <TextField
                        onChange={(e) => {
                            onPlaceSelect(e.target.value);
                        }}
                        placeholder="Digite a localização"
                        InputProps={{
                            endAdornment: (
                                <>
                                    {inputLocation && (
                                        <IconButton onClick={handleRedirectToPlace}>
                                            <MapPin size={24} />
                                        </IconButton>
                                    )}
                                </>
                            ),
                        }}
                        {...textFieldProps}
                    />
                </StandaloneSearchBox>
            ) : (
                <TextField
                    onChange={(e) => {
                        onPlaceSelect(e.target.value);
                    }}
                    placeholder="Digite a localização"
                    InputProps={{
                        endAdornment: (
                            <>
                                {inputLocation && (
                                    <IconButton>
                                        <MapPin size={32} />
                                    </IconButton>
                                )}
                            </>
                        ),
                    }}
                    {...textFieldProps}
                />
            )}
        </AdmLocationInputContainer>
    );
};

export default AdmLocationInput;
