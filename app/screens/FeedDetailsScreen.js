import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function FeedDetailsScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground source={require('../assets/card-banner.jpg')} style={styles.image} />

                <ListItem
                    image={require('../assets/profile.jpeg')}
                    title="porttitor volutpat lorem, eu congue urna finibus nec"
                    description="Nunc faucibus lacus dui, vitae aliquam nunc euismod eu. Aenean scelerisque dolor eu rutrum auctor. Proin in lobortis dolor. Nullam auctor felis nec turpis egestas vestibulum. Nam sapien turpis, sollicitudin pharetra sollicitudin vitae, iaculis quis justo. Suspendisse consectetur justo sit amet molestie finibus. Integer sagittis eleifend est non efficitur. Suspendisse neque lorem, consectetur eget odio quis, condimentum venena" />

                <View style={styles.articleContainer}>
                    <AppText style={styles.articleText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla tellus, ornare ut ex sed, ornare vestibulum lectus. Donec dui massa, ornare eu auctor sed, viverra eget lacus. Fusce porttitor risus vitae ipsum condimentum, at blandit enim scelerisque. Ut facilisis massa ac nunc placerat, a lobortis quam scelerisque. Cras erat nisi, dictum et eros et, maximus luctus nibh. In a metus lorem. Sed iaculis erat tellus, in tincidunt turpis scelerisque eget. In et tempus augue. Fusce sollicitudin erat a ante convallis imperdiet in vitae est. Curabitur a mollis nunc. Maecenas elementum est ac dui egestas blandit. Etiam nec placerat velit, non varius dolor. Praesent libero libero, varius non enim non, blandit vulputate turpis. Duis faucibus accumsan ex quis ultrices.

                        Suspendisse porttitor volutpat lorem, eu congue urna finibus nec. Maecenas gravida nibh eget lacus efficitur tempor. Etiam purus metus, gravida vitae tincidunt et, consequat ut dui. Sed sagittis tellus eget est congue, ac lobortis lacus hendrerit. Integer commodo purus et quam sagittis facilisis. Nam egestas facilisis tellus, eu accumsan leo rutrum nec. Maecenas molestie sagittis congue. Curabitur id sapien id erat consectetur bibendum. Proin blandit venenatis cursus. Nulla imperdiet, augue non accumsan eleifend, tortor odio blandit orci, lobortis pulvinar lectus ligula sit amet purus. Phasellus sit amet nulla vitae libero maximus gravida. Proin porttitor ipsum non porta finibus. Morbi malesuada justo odio, vitae suscipit magna molestie ac. Sed arcu nisl, fermentum sit amet facilisis ac, volutpat ac neque. Ut tincidunt nisi quis est tincidunt tincidunt. Nunc eget lorem nunc.

                        Nunc faucibus lacus dui, vitae aliquam nunc euismod eu. Aenean scelerisque dolor eu rutrum auctor. Proin in lobortis dolor. Nullam auctor felis nec turpis egestas vestibulum. Nam sapien turpis, sollicitudin pharetra sollicitudin vitae, iaculis quis justo. Suspendisse consectetur justo sit amet molestie finibus. Integer sagittis eleifend est non efficitur.

                        Suspendisse neque lorem, consectetur eget odio quis, condimentum venenatis eros. Suspendisse potenti. Vivamus blandit iaculis ex, at aliquet sem iaculis a. Mauris sit amet hendrerit lorem. In sit amet elementum sem. Integer vehicula diam vitae lectus accumsan, vitae tempus urna ultrices. Fusce finibus erat mi. Quisque non tempus augue, nec convallis ligula. Suspendisse potenti. Curabitur ut lacinia orci, vitae pulvinar lectus. Donec gravida sem dolor, ut aliquam dui feugiat ultrices. Maecenas et quam eget nisl tempor efficitur eget in diam.

                        Etiam erat quam, vulputate nec aliquet eget, aliquet ac nunc. Vivamus dictum efficitur erat nec commodo. Ut mi magna, maximus non dignissim vel, lobortis ac tellus. Nulla tincidunt sit amet dui vel feugiat. Sed at ex venenatis purus tincidunt pellentesque. Morbi congue justo in molestie tincidunt. Curabitur nisi ligula, efficitur nec rhoncus quis, ultrices ac tortor. Quisque ultricies orci non bibendum faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed aliquet, lorem non ultrices aliquam, quam magna sagittis libero, eget viverra sapien turpis in dolor. Suspendisse potenti. Integer lobortis mauris sit amet ipsum consectetur gravida. Curabitur a dui at mauris vestibulum cursus.
                    </AppText>
                </View>

                <ListItem />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    articleContainer: {
        padding: 20,
        paddingVertical: 20,
        marginBottom: 10,
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
    },
    articleText: {
        color: colors.black,
    },
    container: {
        flex: 1,
    },


    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
    },

})
