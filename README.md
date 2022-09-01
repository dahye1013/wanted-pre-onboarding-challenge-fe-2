# 프리온보딩 프론트엔드 챌린지- TypeScript

## 과제 목표

Todo 앱을 JSDoc으로 문서화하기

- [x] 모든 요구사항은 JSDoc을 기반으로 수행합니다.
- [x] 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-2로 생성 (Public 권한 필요)

## 📝 Requirements

### 필수 요구사항

- [x] 필요한 데이터를 모두 모델링한다.
- [x] 사용되는 모든 함수를 `선언부만` 만든다.
- [x] 함수 및 클래스의 내부는 구현하지 않습니다.
- [x] `JSDoc`을 활용해 문서화한다.
- [x] `GitHub Page`를 활용해 `JSDoc` 정적 페이지를 배포한다

  🔗 [배포링크](https://dahye1013.github.io/wanted-pre-onboarding-challenge-fe-2/)

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

#### CREATE

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.

#### READ

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.

#### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```

#### Reference

- [use JSDoc](https://jsdoc.app)
- [JSDoc Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)
