<template>
    <div class="detail-specs"
         v-if="Object.keys(goodsSpecs).length !== 0">
      <div class="specs-rule">
        <div class="rule-key">{{goodsSpecs.ruleKey}}</div>
        <ul class="rule-content">
          <li v-for="specs of goodsSpecs.ruleSet[0]" class="rule-item">
            <p v-for="item of specs">{{item}}</p>
          </li>
        </ul>
      </div>
      <div class="specs-info">
        <div class="info-key">{{goodsSpecs.infoKey}}</div>
          <ul class="info-content">
            <li v-for="item of goodsSpecs.infoSet" class="info-item">
              <p>{{item.key}}</p>
              <div>{{item.value}}</div>
            </li>
          </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailShopSpecs",
      props:{
        goodsSpecs:{
          type:Object,
          default(){
            return {}
          }
        }
      }
    }
</script>

<style scoped>
  .detail-specs{
    padding-bottom: 18px;
    border-bottom:5px solid #f2f5f8;
  }
  .info-key, .rule-key{
    margin: 8px 0;
    padding: 6px 16px;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 600;
    border-left: 4px solid var(--color-high-text);
    box-shadow: 0 2px 2px rgba(236, 236, 236, 0.35);
  }
  .info-content, .rule-content{
    padding-left: 18px;
  }
  .info-item, .rule-item{
    display: flex;
    padding: 6px 0;
    line-height: 28px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    letter-spacing: 2px;
  }
  .info-item p, .rule-item p{
    flex: 1;
    color: var(--color-text)
  }
  .info-item div{
    flex: 3;
    font-size: 14px;
    color: var(--color-price)
  }
</style>
