# Nomad Movies

iOS / Android Movie Discovery App built with React Native

## assets

- [ ] font
- [ ] sound
- [ ] image
- [ ] icon
- Ionicons from expo vector icons
- [ ] etc

- loadAssets

## Screens

- [ ] Movies
- [ ] TV Shows
- [ ] Search
- [ ] Detail

- BottomTabNavigator
- createBottomTabNavigator 는 첫번째로 라우터를 가진 오브젝트를 인자로 받고 두번째로 설정값들을 가진 오브젝트를 받는다.

- TabNavigation > TabBarIcon

- StackNavigation - 한장만 맨위에 올수있고 카드는 추가될수도 빠질수도 있다. 뷰를 교체하는것이 아니다.
- 탭 네비게이션이 하는것은 뷰를 바꾸고 맨위에 오게하는것이다.
- movie, tv, search 는 모두 탭 네비게이션의 자식이다. 하지만 detail 은 형제다.
- 리엑트 네비게이션은 전부 스택과 탭을 기준으로 돌아간다.
