import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import AppText from '../components/AppText'
import Card from '../components/Card'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors'

const articles = [
    {
        id: 1,
        image: require('../assets/card-banner.jpg'),
        title: 'Moirs Hill Lambing',
        description: 'Lambing season started in Moirs Hill, Avoid the area until further notice. Contact PGSO: Jeremy',
        article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc nulla tellus, ornare ut ex sed, ornare vestibulum lectus.Donec dui massa, ornare eu auctor sed, viverra eget lacus.Fusce porttitor risus vitae ipsum condimentum, at blandit enim scelerisque.Ut facilisis massa ac nunc placerat, a lobortis quam scelerisque.Cras erat nisi, dictum et eros et, maximus luctus nibh.In a metus lorem.Sed iaculis erat tellus, in tincidunt turpis scelerisque eget.In et tempus augue.Fusce sollicitudin erat a ante convallis imperdiet in vitae est.Curabitur a mollis nunc.Maecenas elementum est ac dui egestas blandit.Etiam nec placerat velit, non varius dolor.Praesent libero libero, varius non enim non, blandit vulputate turpis.Duis faucibus accumsan ex quis ultrices. Suspendisse porttitor volutpat lorem, eu congue urna finibus nec.Maecenas gravida nibh eget lacus efficitur tempor.Etiam purus metus, gravida vitae tincidunt et, consequat ut dui.Sed sagittis tellus eget est congue, ac lobortis lacus hendrerit.Integer commodo purus et quam sagittis facilisis.Nam egestas facilisis tellus, eu accumsan leo rutrum nec.Maecenas molestie sagittis congue.Curabitur id sapien id erat consectetur bibendum.Proin blandit venenatis cursus.Nulla imperdiet, augue non accumsan eleifend, tortor odio blandit orci, lobortis pulvinar lectus ligula sit amet purus.Phasellus sit amet nulla vitae libero maximus gravida.Proin porttitor ipsum non porta finibus.Morbi malesuada justo odio, vitae suscipit magna molestie ac.Sed arcu nisl, fermentum sit amet facilisis ac, volutpat ac neque.Ut tincidunt nisi quis est tincidunt tincidunt.Nunc eget lorem nunc. Nunc faucibus lacus dui, vitae aliquam nunc euismod eu.Aenean scelerisque dolor eu rutrum auctor.Proin in lobortis dolor.Nullam auctor felis nec turpis egestas vestibulum.Nam sapien turpis, sollicitudin pharetra sollicitudin vitae, iaculis quis justo.Suspendisse consectetur justo sit amet molestie finibus.Integer sagittis eleifend est non efficitur.Suspendisse neque lorem, consectetur eget odio quis, condimentum venenatis eros.Suspendisse potenti.Vivamus blandit iaculis ex, at aliquet sem iaculis a.Mauris sit amet hendrerit lorem.In sit amet elementum sem.Integer vehicula diam vitae lectus accumsan, vitae tempus urna ultrices.Fusce finibus erat mi.Quisque non tempus augue, nec convallis ligula.Suspendisse potenti.Curabitur ut lacinia orci, vitae pulvinar lectus.Donec gravida sem dolor, ut aliquam dui feugiat ultrices.Maecenas et quam eget nisl tempor efficitur eget in diam. Etiam erat quam, vulputate nec aliquet eget, aliquet ac nunc.Vivamus dictum efficitur erat nec commodo.Ut mi magna, maximus non dignissim vel, lobortis ac tellus.Nulla tincidunt sit amet dui vel feugiat.Sed at ex venenatis purus tincidunt pellentesque.Morbi congue justo in molestie tincidunt.Curabitur nisi ligula, efficitur nec rhoncus quis, ultrices ac tortor.Quisque ultricies orci non bibendum faucibus.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed aliquet, lorem non ultrices aliquam, quam magna sagittis libero, eget viverra sapien turpis in dolor.Suspendisse potenti.Integer lobortis mauris sit amet ipsum consectetur gravida.Curabitur a dui at mauris vestibulum cursus.',
        navigation: 'FeedDetails'
    }, {
        id: 2,
        image: require('../assets/post-banner-2.jpg'),
        title: 'New Competion Starting Soon',
        description: 'Just like the last years fun comps we are starting this year again.',
        article: '',
        navigation: 'FeedDetails'
    },
    {
        id: 3,
        image: require('../assets/post-banner-1.jpg'),
        title: 'Moirs Hill Lambing',
        description: 'Lambing season started in Moirs Hill, Avoid the area until further notice. Contact PGSO: Jeremy',
        article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc nulla tellus, ornare ut ex sed, ornare vestibulum lectus.Donec dui massa, ornare eu auctor sed, viverra eget lacus.Fusce porttitor risus vitae ipsum condimentum, at blandit enim scelerisque.Ut facilisis massa ac nunc placerat, a lobortis quam scelerisque.Cras erat nisi, dictum et eros et, maximus luctus nibh.In a metus lorem.Sed iaculis erat tellus, in tincidunt turpis scelerisque eget.In et tempus augue.Fusce sollicitudin erat a ante convallis imperdiet in vitae est.Curabitur a mollis nunc.Maecenas elementum est ac dui egestas blandit.Etiam nec placerat velit, non varius dolor.Praesent libero libero, varius non enim non, blandit vulputate turpis.Duis faucibus accumsan ex quis ultrices. Suspendisse porttitor volutpat lorem, eu congue urna finibus nec.Maecenas gravida nibh eget lacus efficitur tempor.Etiam purus metus, gravida vitae tincidunt et, consequat ut dui.Sed sagittis tellus eget est congue, ac lobortis lacus hendrerit.Integer commodo purus et quam sagittis facilisis.Nam egestas facilisis tellus, eu accumsan leo rutrum nec.Maecenas molestie sagittis congue.Curabitur id sapien id erat consectetur bibendum.Proin blandit venenatis cursus.Nulla imperdiet, augue non accumsan eleifend, tortor odio blandit orci, lobortis pulvinar lectus ligula sit amet purus.Phasellus sit amet nulla vitae libero maximus gravida.Proin porttitor ipsum non porta finibus.Morbi malesuada justo odio, vitae suscipit magna molestie ac.Sed arcu nisl, fermentum sit amet facilisis ac, volutpat ac neque.Ut tincidunt nisi quis est tincidunt tincidunt.Nunc eget lorem nunc. Nunc faucibus lacus dui, vitae aliquam nunc euismod eu.Aenean scelerisque dolor eu rutrum auctor.Proin in lobortis dolor.Nullam auctor felis nec turpis egestas vestibulum.Nam sapien turpis, sollicitudin pharetra sollicitudin vitae, iaculis quis justo.Suspendisse consectetur justo sit amet molestie finibus.Integer sagittis eleifend est non efficitur.Suspendisse neque lorem, consectetur eget odio quis, condimentum venenatis eros.Suspendisse potenti.Vivamus blandit iaculis ex, at aliquet sem iaculis a.Mauris sit amet hendrerit lorem.In sit amet elementum sem.Integer vehicula diam vitae lectus accumsan, vitae tempus urna ultrices.Fusce finibus erat mi.Quisque non tempus augue, nec convallis ligula.Suspendisse potenti.Curabitur ut lacinia orci, vitae pulvinar lectus.Donec gravida sem dolor, ut aliquam dui feugiat ultrices.Maecenas et quam eget nisl tempor efficitur eget in diam. Etiam erat quam, vulputate nec aliquet eget, aliquet ac nunc.Vivamus dictum efficitur erat nec commodo.Ut mi magna, maximus non dignissim vel, lobortis ac tellus.Nulla tincidunt sit amet dui vel feugiat.Sed at ex venenatis purus tincidunt pellentesque.Morbi congue justo in molestie tincidunt.Curabitur nisi ligula, efficitur nec rhoncus quis, ultrices ac tortor.Quisque ultricies orci non bibendum faucibus.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed aliquet, lorem non ultrices aliquam, quam magna sagittis libero, eget viverra sapien turpis in dolor.Suspendisse potenti.Integer lobortis mauris sit amet ipsum consectetur gravida.Curabitur a dui at mauris vestibulum cursus.',
        navigation: 'FeedDetails'
    },
];


const Header = () => (
    <>
        <ListItem
            image={require('../assets/logo.png')}
            title="Welcome, Dammike!"
            description="We are currently updating our App to enable LiveTracking. This feature will be updated as soon as possible!.." />

        <Divider width={1} />
    </>
);

const SortPanel = () => (
    <View style={styles.sortPanel}>
        <TouchableWithoutFeedback onPress={() => console.log('filter results!')}>
            <View style={styles.headerBtnBox}>
                <AppText style={styles.headerBtnTitle}>Most Viewed</AppText>
                <MaterialCommunityIcons name='chevron-down' />
            </View>
        </TouchableWithoutFeedback>

        <View style={styles.headerPanel}>
            <AppText style={styles.headerPanelTxt}>Saved</AppText>
            <MaterialCommunityIcons name='heart' />
        </View>
    </View>
);

export default function FeedScreen({ navigation }) {
    return (
        <Screen>
            <Header />
            <FlatList
                data={articles}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={SortPanel}
                renderItem={({ item }) => (
                    <Card
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        onPress={() => navigation.navigate('FeedDetails', item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    sortPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.white,
    },
    headerBtnBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBtnTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 10,
        marginRight: 8,
    },
    headerPanel: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerPanelTxt: {
        fontSize: 16,
    }
})
