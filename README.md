> Why do I have a folder named ".expo" in my project?

# [Burn.Fit] Front-end 과제

## 구현 요구 사항

<br>

React Native 기반 앱을 제작

- Bottom Tabs Navigator (홈 / 캘린더 / 라이브러리 / 마이페이지) 추가
- 캘린더 탭에 외부 캘린더 라이브러리 사용 없이 캘린더 구현
- 허용된 라이브러리를 사용해 제스처로 월, 주 캘린더 변경기능 및 날짜변경 구현

<br>

## 구현

<br>

### Bottom Tabs Navigator

<br>

- React navigation 라이브러리를 사용하여 Bottom Tabs Navigator을 구현하였습니다. 각 탭들의 아이콘은 expo/vector-icons를 사용했습니다.

<br>

### 캘린더 구현

<br>

- 요구 사항에 외부 캘린더 라이브러리를 사용하지 말라고만 되어 있어 day.js 나 moment.js의 사용을 고민했지만, 출제 의도에 맞지 않다고 생각되어 Date 객체를 사용하였습니다.

<br>

- 달력 구현에 필요한 요소들을 고민했고, 아래와 같은 함수들을 구현했습니다.
  - 해당 달의 시작 요일을 구하는 함수
  - 해당 달의 마지막 날을 구하는 함수
  - 다음 달의 연도와 월을 구하는 함수
  - 이전 달의 연도와 월을 구하는 함수
  - 해당 달이 몇 주인지 구하는 함수(이전 달, 다음 달 표시되는 날짜 포함)

<br>

- Day (CalendarDay component)

  - 클릭 시에 원 표시가 적용되어야 하기 때문에 react-native의 Button 컴포넌트를 사용하려 하였지만, Button 컴포넌트는 android와 ios에서 다르게 보인다는 문서를 보고 TouchableOpacity를 사용했습니다.

<br>

- Week (CalendarWeekContainer component)

  - 현재의 연도와 월 그리고 해당 달의 몇 번째 주인지를 props로 받아서 해당하는 CalendarDay 7개를 한 줄로 나타내게 만들었습니다. 해당 달의 시작 요일 전까진 이전 달의 날짜들이 표기되고, 해당 달의 마지막 날이 지나면 다음 달의 날짜들이 나타나게 구현했습니다.

<br>

- Month (CalendarMonthContainer component)

  - 해당 달의 주 수만큼 CalendarWeekContainer를 세로로 나열해서 구현했습니다.

<br>

### 월, 주 캘린더 변경기능

<br>

- react-native-gesture-handler의 pop gesture를 사용해 위, 아래로 얼마큼 swipe를 했는지 입력받아서 조건문에 따라 월, 주 캘린더가 변경되게 구현하였습니다. 그런데 웹에선 잘 적용되던 pop gesture가 android에서 실행되지 않는 문제가 발생해 GestureHandlerRootView를 gesture에 감싸줘서 해당 문제를 해결했습니다.

<br>

- 과제 설명에서는 월 캘린더가 swipe에 따라 자연스럽게 주 캘린더로 변경되었기에 pop gesture의 onchange에서 useSharedValue를 변경시키고, useAnimatedStyle에 withTiming로 height를 조절, overflow hidden까지 적용시켜 줬지만 제대로 작동하지 않아서 마지막에 모두 제거하였습니다. 해당 이슈에 대해서는 추가적으로 공부해 볼 예정입니다.

<br>

### swipe로 날짜 변경

<br>

- 월 캘린더의 경우는 pop gestur로 입력받은 정보에 따라 월을 변경하면 됐지만, 주 캘린더의 경우에는 좌우 이동이 연속적으로 나타나야 했습니다. 저는 CalendarWeekContainer를 재사용하는 방식으로 설계를 하였기에 swipe에 따라 한 주씩 변경되도록 구현하였습니다.

<br>

- 아쉬운 점은 구현 사항에는 swipe 하여 날짜를 이동하는 게 나와있지 않아 해당 사항을 고려하지 않았던 점입니다. 만약 다시 구현하게 된다면 ScrollView를 사용하여 구현할 수 있을 것으로 생각됩니다.

<br>
