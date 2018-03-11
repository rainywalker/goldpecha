<template>
    <section>
        <div class="con" v-if="setActivated === 0">
            <dl class="prepare_paper">
                <dt>일반폐차</dt>
                <dd>압류나 저당이 없고, 혹시 압류나 저당이 있어도 바로 완납이 가능한 차량</dd>
                <dd>24시간 이내 말소 가능</dd>
            </dl>
            <dl class="prepare_paper ds">
                <dt>필요서류</dt>
                <dd>
                    <table class="tbl">
                        <caption class="blind">일반폐차</caption>
                        <thead>
                        <tr>
                            <th class="none_l">개인</th>
                            <th>공동명의</th>
                            <th class="none_r">법인</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>자동차 등록증</td>
                            <td>자동차 등록증</td>
                            <td>자동차 등록증</td>
                        </tr>
                        <tr>
                            <td>신분증 사본</td>
                            <td>각각 신분증 사본</td>
                            <td>법인 사업자 등록증</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>법인 인감증명서</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>법인 등기부등본</td>
                        </tr>
                        </tbody>
                    </table>
                </dd>
            </dl>


        </div>
        <div class="con" v-else-if="setActivated === 1">
            <dl class="prepare_paper">
                <dt>조기폐차</dt>
                <dd>정상운행이 가능한 노후 경유자동차를 조기에 폐차할 경우 국가에서 보조금을 지원하는 제도</dd>
                <dd>2~3주 정도 소요</dd>
                <dd class="hypen">조기폐차조건</dd>
                <dd class="middot">&middot; 최종 소유자의 소유기간이 6개월 이상인 경유자동차</dd>
                <dd class="middot">&middot; 대기관리권역에 2년 이상 연속하여 등록된 경유자동차</dd>
                <dd class="middot">&middot; 매연저감장치 부착 및 LPG 엔진 개조 이력이 없는 경유자동차</dd>
                <dd class="middot">&middot; 정상 운행되고, 외관상 파손이나 사고 없는 경유자동차</dd>
            </dl>
            <dl class="prepare_paper ds">
                <dt>필요서류</dt>
                <dd>
                    <table class="tbl">
                        <caption class="blind">일반폐차</caption>
                        <thead>
                        <tr>
                            <th class="none_l">개인</th>
                            <th>공동명의</th>
                            <th class="none_r">법인</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>자동차 등록증</td>
                            <td>자동차 등록증</td>
                            <td>자동차 등록증</td>
                        </tr>
                        <tr>
                            <td>신분증 사본</td>
                            <td>각각 신분증 사본</td>
                            <td>법인 사업자 등록증</td>
                        </tr>
                        <tr>
                            <td>통장사본</td>
                            <td>대표자 통장</td>
                            <td>법인 인감증명서</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>위임자 인감증명서</td>
                            <td>법인 등기부등본</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>위임장</td>
                            <td>법인 통장사</td>
                        </tr>
                        </tbody>
                    </table>

                </dd>
            </dl>
            <dl class="prepare_paper ds">
                <dt>조기폐차 가능지역</dt>
                <dd>
                    <table class="tbl">
                        <thead>
                        <tr>
                            <th class="none_l">지역구분</th>
                            <th class="none_r">지역범위</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>서울특별시</td>
                            <td>전지역</td>
                        </tr>
                        <tr>
                            <td>인천광역시</td>
                            <td>옹진군을 제외한 전지역(옹진군 영흥면은 가능)</td>
                        </tr>
                        <tr>
                            <td>경기도</td>
                            <td>연천, 가평, 양평 제외한 전지역</td>
                        </tr>
                        </tbody>
                    </table>
                </dd>
            </dl>
        </div>
        <div class="con" v-else-if="setActivated === 2">
            <dl class="prepare_paper">
                <dt>차령초과</dt>
                <dd>압류나 저당이 많아, 당장 납부가 불가능한 차량</dd>
                <dd>45~60일 소요 (압류나 저당이 걸려 있기 때문에, 촉탁기관이나 채무자의 동의를 구하고 권리 행사를 할 수 있음)</dd>
                <dd>대상</dd>
                <dd class="middot">&middot; 승용 - 11년 이상</dd>
                <dd class="middot">&middot; 승합 / 화물 / 특수 (경형 및소형) - 10년 이상</dd>
                <dd class="middot">&middot; 승합 (중형 및 대형) - 10년 이상</dd>
                <dd class="middot">&middot; 화물 / 특수 (중형 및 대형) - 12년 이상</dd>
            </dl>
            <dl class="prepare_paper ds">
                <dt>필요서류</dt>
                <dd>
                    <table class="tbl">
                        <caption class="blind">일반폐차</caption>
                        <thead>
                        <tr>
                            <th class="none_l">개인</th>
                            <th class="none_r">법인</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>자동차 등록증</td>
                            <td class="none_r">자동차 등록증</td>
                        </tr>
                        <tr>
                            <td>신분증 사본</td>
                            <td class="none_r">법인 사업자 등록증</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="none_r">법인 인감증명서</td>
                        </tr>                <tr>
                            <td></td>
                            <td class="none_r">법인 등기부등본</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="none_r">위임장</td>
                        </tr>
                        </tbody>
                    </table>
                </dd>
            </dl>



        </div>
        <div class="con" v-else-if="setActivated === 3">
            <dl class="prepare_paper">
                <dt>상속폐차</dt>
                <dd>사망한 고인의 차량을 폐차하는 방법</dd>
                <dd>사망 신고 전과 후로 나뉨</dd>
                <dd>사망 신고 전 - 일반폐차 / 사망 신고 후 - 차령초과(압류)폐차</dd>
            </dl>
            <dl class="prepare_paper ds">
                <dt>필요서류</dt>
                <dd>
                    <table class="tbl">
                        <caption class="blind">상속폐차</caption>
                        <thead>
                        <tr>
                            <th class="none_l">사망 신고 전</th>
                            <th class="none_r">사망 신고 후</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>자동차 등록증</td>
                            <td class="none_r">자동차 등록증</td>
                        </tr>
                        <tr>
                            <td>신분증 사본</td>
                            <td class="none_r">고인 기본증명서</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="none_r">고인 가족관계 증명서</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="none_r">직계가족 신분증 사본</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="none_r">상속인 인감증명서</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="none_r">포기 각서</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="none_r">위임장</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="none_r">한정 승인의 경우-한정승인 판결문 사본</td>
                        </tr>
                        </tbody>
                    </table>
                </dd>
            </dl>

        </div>
        <div class="con" v-else-if="setActivated === 4">
            <dl class="prepare_paper">
                <dt>법인폐차</dt>
                <dd>법인 등록된 차량을 폐차하는 방법</dd>
                <dd>정상 운영, 폐업, 해산, 청산 등의 사유로 폐차가 필요한 차량</dd>
            </dl>
            <dl class="prepare_paper ds">
                <dt>필요서류</dt>
                <dd>
                    <table class="tbl">
                    <caption class="blind">일반폐차</caption>
                    <thead>
                    <tr>
                        <th class="none_l none_r">법인</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="none_r">자동차 등록증</td>
                    </tr>
                    <tr>
                        <td class="none_r">마지막 대표자 인감증명서</td>
                    </tr>
                    <tr>
                        <td class="none_r">위임장</td>
                    </tr>
                    <tr>
                        <td class="none_r">법인 등기부등본 (말소사항 포함)</td>
                    </tr>
                    <tr>
                        <td class="none_r">폐업 사실 증명서</td>
                    </tr>
                    </tbody>
                </table>
                </dd>
            </dl>

        </div>
        <div class="con" v-else-if="setActivated === 5">
            <dl class="prepare_paper">
                <dt>문제차</dt>
                <dd>자동차등록증 상의 차주와 실제 소유주가 동일하지만 저당과 압류가 설정되어 있어 일반폐차가 불가능한 경우</dd>
            </dl>
        </div>

    </section>
</template>

<script>
    export default {
        name: "TabByContent",
        props : ['tabArr'],
        computed : {
            setActivated () {
                const array = this.tabArr;
                for (let key in array) {
                    if (array[key].isActive) {
                        return array[key].id;
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.prepare_paper{
    padding:20px 0;
    dt{
        position: relative;font-size:18px;font-weight: bold;padding-left:10px;padding-bottom:20px;
        &:after{position: absolute;width:5px;height:20px;background: #ffe11d;left:0;top:0;content:""}
    }
    dd{
        position:relative;font-size:16px;color:#000;letter-spacing: -0.5px;margin-bottom:10px;padding-left:15px;
        &:before{display: block;position:absolute;top:7px;left:0; width:5px;height:1px;content: "";background: #000}
        &.middot{
            padding-left:10px;color:#595959;
            &:before{display: none}
        }
    }
}

.tbl{
    border-collapse: collapse;width:100%;
    .none_l{border-left:0}
    .none_r{border-right:0}
    th{
        border:1px solid #000;height:40px;font-size:16px;

    }
    td{border:1px solid #f4f4f4;font-size:16px;color:#595959;text-align: center;height:40px;line-height: 40px}
    td:nth-child(3n) {border-right:0}
    td:nth-child(3n+1) {border-left:0}
}
.ds {
    dd{padding-left:0}
    dd:before{display: none}
}
</style>
