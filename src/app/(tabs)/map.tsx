import { colors } from '@/styles/colors';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useMemo, useRef, useState } from 'react';
import { Alert, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

const STATIC_BARBERS = [
  {
    id: '1',
    name: 'Barbearia Central',
    address: 'Rua das Flores, 123',
    phone: '(11) 99999-9999',
    latitude: -23.69796396645239,
    longitude: -46.506514025016,
  },
  {
    id: '2',
    name: 'Barber Shop Premium',
    address: 'Av. Paulista, 456',
    phone: '(11) 98888-8888',
    latitude: -23.561684,
    longitude: -46.655981,
  },
  {
    id: '3',
    name: 'Corte Moderno',
    address: 'Rua do Corte, 789',
    phone: '(11) 97777-7777',
    latitude: -23.55052,
    longitude: -46.633308,
  },
  {
    id: '4',
    name: 'Barbearia Vila Madalena',
    address: 'Rua Harmonia, 95',
    phone: '(11) 91234-5678',
    latitude: -23.561399,
    longitude: -46.685376,
  },
  {
    id: '5',
    name: 'Barber Shop Moema',
    address: 'Alameda dos Arapanés, 1200',
    phone: '(11) 93456-7890',
    latitude: -23.603016,
    longitude: -46.670605,
  },
  {
    id: '6',
    name: 'Barbearia Tatuapé',
    address: 'Rua Serra de Bragança, 500',
    phone: '(11) 94567-1234',
    latitude: -23.540654,
    longitude: -46.576489,
  },
  {
    id: '7',
    name: 'Barbearia Santana',
    address: 'Rua Voluntários da Pátria, 3000',
    phone: '(11) 95678-2345',
    latitude: -23.489967,
    longitude: -46.624021,
  },
  {
    id: '8',
    name: 'Barber Shop Lapa',
    address: 'Rua Clélia, 1500',
    phone: '(11) 96789-3456',
    latitude: -23.527274,
    longitude: -46.687432,
  },
  {
    id: '9',
    name: 'Barbearia Ipiranga',
    address: 'Rua Bom Pastor, 2000',
    phone: '(11) 97890-4567',
    latitude: -23.589958,
    longitude: -46.610118,
  },
  {
    id: '10',
    name: 'Barbearia Pinheiros',
    address: 'Rua dos Pinheiros, 800',
    phone: '(11) 98901-5678',
    latitude: -23.567776,
    longitude: -46.693701,
  },
];

type Barber = {
  id: string;
  name: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
};

export default function MapScreen() {
  const [barbers] = useState<Barber[]>(STATIC_BARBERS);
  const mapRef = useRef<MapView | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '90%'], []);

  const handleOpenDeviceMap = async (latitude: number, longitude: number, label: string) => {
    const schema = Platform.select({
      ios: 'maps://0,0?q=',
      android: 'geo:0,0?q=',
    });

    const latLng = `${latitude},${longitude}`;
    const url = Platform.select({
      ios: `${schema}${label}@${latLng}`,
      android: `${schema}${latLng}(${label})`,
    }) || '';

    const canOpen = await Linking.canOpenURL(url);
    if (!canOpen) {
      Alert.alert('Erro', 'Não foi possível abrir o mapa para gerar a rota!');
      return;
    }

    Linking.openURL(url);
  };

  const handlePlacePress = (latitude: number, longitude: number) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: -23.69796396645239,
          longitude: -46.506514025016,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {barbers.map((barber) => (
          <Marker
            key={barber.id}
            coordinate={{ latitude: barber.latitude, longitude: barber.longitude }}
          >
            <Callout onPress={() => handleOpenDeviceMap(barber.latitude, barber.longitude, barber.name)}>
              <View style={styles.callout}>
                <Text style={styles.titleMap}>{barber.name}</Text>
                <Text style={styles.addressMap}>{barber.address}</Text>
                <Text style={styles.phoneMap}>{barber.phone}</Text>
                <Text style={styles.directions}>Toque para ver a rota</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.indicator}
        backgroundStyle={styles.bottomSheet}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
        topInset={200}
      >
        <BottomSheetFlatList
          data={barbers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.barberName}>{item.name}</Text>
              <Text style={styles.barberAddress}>{item.address}</Text>
                <TouchableOpacity
                onPress={() => {
                  handlePlacePress(item.latitude, item.longitude);
                  bottomSheetRef.current?.snapToIndex(0);
                }}
                >
                <Text style={styles.viewOnMap}>Ver no Mapa</Text>
                </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={styles.content}
          ListHeaderComponent={() => (
            <Text style={styles.title}>Explore locais próximos a você</Text>
          )}
          showsVerticalScrollIndicator={false}
        />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F8F8F8"
  },
  callout: {
    padding: 10,
  },
  titleMap: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addressMap: {
    fontSize: 14,
  },
  phoneMap: {
    fontSize: 14,
  },
  directions: {
    fontSize: 12,
    color: 'blue',
  },
  indicator: {
    backgroundColor: colors.gray.base,
    width: 40,
    height: 4,
    borderRadius: 2,
  },
  bottomSheet: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray.base,
  },
  barberName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  barberAddress: {
    fontSize: 14,
    color: colors.gray.dark,
  },
  viewOnMap: {
    fontSize: 14,
    color: 'blue',
  },
});
