import {
  ButtonContato,
  ButtonDelete,
  Container,
  ContainerButtons,
  ContainerData,
  Content,
  Logo,
  TitleData,
  TitleHora,
} from "./styles";
import jm1 from "../../../assets/jm1.png";
import JM2 from "../../../assets/JM2.png";
import BDM from "../../../assets/BDM.png";
import GEMA from "../../../assets/GEMA.png";
import MIRA from "../../../assets/MIRA.png";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function Header({ onDeleteButtonClick }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [date, setDate] = useState(dayjs());
  const [banner, setBanner] = useState(jm1);
  const navigation = useNavigation();

  useEffect(() => {
    const updateClock = () => {
      const newTime = new Date();
      setCurrentTime(newTime);

      const currentHour = newTime.getHours();
      const currentMinute = newTime.getMinutes();

      if (
        (currentHour === 5 && currentMinute >= 50) ||
        (currentHour === 6 && currentMinute <= 30)
      ) {
        setBanner(BDM);
      } else if (
        (currentHour === 10 && currentMinute >= 0) ||
        (currentHour === 12 && currentMinute <= 58)
      ) {
        setBanner(jm1);
      } else if (
        (currentHour === 12 && currentMinute >= 59) ||
        (currentHour === 13 && currentMinute <= 24)
      ) {
        setBanner(GEMA);
      } else if (
        (currentHour === 18 && currentMinute >= 0) ||
        (currentHour === 19 && currentMinute <= 40)
      ) {
        setBanner(JM2);
      } else {
        setBanner(MIRA);
      }
    };

    const intervalId = setInterval(updateClock, 1000);

    // Call updateClock once to set the initial banner correctly
    updateClock();

    return () => clearInterval(intervalId);
  }, []);

  const handleDeleteButtonClick = () => {
    // Call the onDeleteButtonClick function passed from the parent component
    onDeleteButtonClick();
  };

  function formatTimeToHoursAndMinutes(date) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  return (
    <Container>
      <Logo source={banner} resizeMode="cover" />
      <Content>
        <ContainerButtons>
          <ButtonContato onPress={() => navigation.navigate("Contatos")}>
            <MaterialIcons name="person-add-alt-1" size={24} color="white" />
          </ButtonContato>
          <ButtonDelete onPress={() => handleDeleteButtonClick()}>
            <Ionicons name="md-trash-outline" size={24} color="white" />
          </ButtonDelete>
        </ContainerButtons>
        <ContainerData>
          <TitleHora>{formatTimeToHoursAndMinutes(currentTime)}</TitleHora>
          <TitleData>{date.format("DD/MM/YYYY")}</TitleData>
        </ContainerData>
      </Content>
    </Container>
  );
}
