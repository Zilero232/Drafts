<template>
  <div class="improve__wrapper-select">
    <div
      class="improve__wrapper-select_comand"
      v-for="(comand, id) in comands"
      :key="id"
    >
      <div
        class="improve__wrapper-select_inner"
        v-if="comand.name == activeBlock"
      >
        <div
          class="improve__wrapper-agent"
          @click="$emit('changeBlockCustom', comand.improveAgents[0].skins)"
        >
          <div class="improve__wrapper-agent_img">
            <img
              :src="
                require(`@/assets/images/${comand.improveAgents[0].skins[0].type[0].img}`)
              "
              alt=""
            />
          </div>
          <p class="improve__wrapper-aget_text">Agents</p>
        </div>

        <div class="improve__wrapper-skins">
          <div
            class="improve__wrapper-skins_item"
            v-for="(item, id) in comand.improveSkins"
            :key="id"
            @click="$emit('changeBlockAbout', item.weapons)"
          >
            <div class="improve__wrapper-skins_img">
              <img :src="require(`@/assets/images/${item.img}`)" alt="" />
            </div>
            <p class="improve__wrapper-skins_text">{{ item.title }}</p>
          </div>

          <button
            class="improve__wrapper-skins_play"
            @click="activeBlock = !activeBlock"
            v-show="activeBlock"
          >
            <img src="@/assets/images/improve/play-icon.png" alt="" />
          </button>

          <button
            class="improve__wrapper-skins_play"
            @click="activeBlock = !activeBlock"
            v-show="!activeBlock"
          >
            <img src="@/assets/images/improve/play-icon-2.png" alt="" />
          </button>
        </div>

        <div class="improve__wrapper-selects">
          <div
            class="improve__wrapper-selects_item"
            v-for="(item, id) in comand.improveSelects"
            :key="id"
            @click="$emit('changeBlockCustomSelect', item.skins)"
          >
            <div class="improve__wrapper-selects_img">
              <img :src="require(`@/assets/images/${item.img}`)" alt="" />
            </div>
            <p class="improve__wrapper-selects_text">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      activeBlock: true,
      comands: [
        {
          name: true,
          improveAgents: [
            {
              skins: [
                {
                  type: [
                    {
                      img: 'improve/agents/agent-1.png',
                    },
                    {
                      img: 'all/other/agents/ct/5.png',
                    },
                    {
                      img: 'all/other/agents/ct/7.png',
                    },
                    {
                      img: 'all/other/agents/ct/10.png',
                    },
                    {
                      img: 'all/other/agents/ct/12.png',
                    },
                    {
                      img: 'all/other/agents/ct/13.png',
                    },
                    {
                      img: 'all/other/agents/ct/14.png',
                    },
                    {
                      img: 'all/other/agents/ct/21.png',
                    },
                    {
                      img: 'all/other/agents/ct/22.png',
                    },
                    {
                      img: 'all/other/agents/ct/23.png',
                    },
                    {
                      img: 'all/other/agents/ct/27.png',
                    },
                    {
                      img: 'all/other/agents/ct/28.png',
                    },
                    {
                      img: 'all/other/agents/ct/29.png',
                    },
                    {
                      img: 'all/other/agents/ct/31.png',
                    },
                                                            {
                      img: 'all/other/agents/ct/33.png',
                    },
                  ],
                },
                {
                  type: [
                    {
                      img: 'improve/agents/agent-1.png',
                    },
                                        {
                      img: 'all/other/agents/ct/34.png',
                    },
                    {
                      img: 'all/other/agents/ct/35.png',
                    },
                          {
                      img: 'all/other/agents/ct/36.png',
                    },
                    {
                      img: 'all/other/agents/ct/37.png',
                    },
                             {
                      img: 'all/other/agents/ct/38.png',
                    },
                    {
                      img: 'all/other/agents/ct/40.png',
                    },
                    {
                      img: 'all/other/agents/ct/42.png',
                    },
                    {
                      img: 'all/other/agents/ct/43.png',
                    },
                    {
                      img: 'all/other/agents/ct/46.png',
                    },
                    {
                      img: 'all/other/agents/ct/47.png',
                    },
                    {
                      img: 'all/other/agents/ct/48.png',
                    },
                    {
                      img: 'all/other/agents/ct/50.png',
                    },
                    {
                      img: 'all/other/agents/ct/51.png',
                    },
                    {
                      img: 'all/other/agents/ct/52.png',
                    },
                  ],
                },
              ],
            },
          ],
          improveSkins: [
            {
              title: 'Pistols',
              img: 'skins/item-1.png',
              weapons: [
                {
                  title: 'cz75-auto',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/pistols/cz75-auto/1.png',
                  comparison: [
                    {
                      img: 'all/ct/pistols/cz75-auto/1.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                      status: 'red'
                    },
                    {
                      img: 'all/ct/pistols/cz75-auto/2.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                                        status: 'red'
                    },
                    {
                      img: 'all/ct/pistols/cz75-auto/3.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                                        status: 'red'
                    },
                    {
                      img: 'all/ct/pistols/cz75-auto/4.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/cz75-auto/5.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/cz75-auto/6.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/cz75-auto/7.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/cz75-auto/8.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/cz75-auto/9.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/cz75-auto/10.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/cz75-auto/11.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/cz75-auto/12.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'deagle',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/pistols/deagle/1.png',
                  comparison: [
                    {
                      img: 'all/ct/pistols/deagle/1.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/deagle/2.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/deagle/3.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/deagle/4.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/deagle/5.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/deagle/6.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/deagle/7.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/deagle/8.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/deagle/9.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/deagle/10.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/deagle/11.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/deagle/12.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'dual berettas',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/pistols/dual berettas/1.png',
                  comparison: [
                    {
                      img: 'all/ct/pistols/dual berettas/1.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/dual berettas/2.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/dual berettas/3.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/dual berettas/4.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/dual berettas/5.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/dual berettas/6.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/dual berettas/7.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/dual berettas/8.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/dual berettas/9.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/dual berettas/10.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/dual berettas/11.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/dual berettas/12.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'five-seven',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/pistols/five-seven/1.png',
                  comparison: [
                    {
                      img: 'all/ct/pistols/five-seven/1.png',
                      title: 'five-seven',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/five-seven/2.png',
                      title: 'five-seven',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/five-seven/3.png',
                      title: 'five-seven',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/five-seven/4.png',
                      title: 'five-seven',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/five-seven/5.png',
                      title: 'five-seven',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/five-seven/6.png',
                      title: 'five-seven',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/five-seven/7.png',
                      title: 'five-seven',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/five-seven/8.png',
                      title: 'five-seven',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/five-seven/9.png',
                      title: 'five-seven',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/five-seven/10.png',
                      title: 'five-seven',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/five-seven/11.png',
                      title: 'five-seven',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/five-seven/12.png',
                      title: 'five-seven',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'p250',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/pistols/p250/1.png',
                  comparison: [
                    {
                      img: 'all/ct/pistols/p250/1.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p250/2.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p250/3.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p250/4.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p250/5.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p250/6.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p250/7.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p250/8.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p250/9.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p250/10.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p250/11.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p250/12.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'p2000',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/pistols/p2000/1.png',
                  comparison: [
                    {
                      img: 'all/ct/pistols/p2000/1.png',
                      title: 'p2000',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p2000/2.png',
                      title: 'p2000',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p2000/3.png',
                      title: 'p2000',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p2000/4.png',
                      title: 'p2000',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p2000/5.png',
                      title: 'p2000',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p2000/6.png',
                      title: 'p2000',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p2000/7.png',
                      title: 'p2000',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p2000/8.png',
                      title: 'p2000',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p2000/9.png',
                      title: 'p2000',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p2000/10.png',
                      title: 'p2000',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p2000/11.png',
                      title: 'p2000',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/p2000/12.png',
                      title: 'p2000',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'r8 revolver',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/pistols/r8 revolver/1.png',
                  comparison: [
                    {
                      img: 'all/ct/pistols/r8 revolver/1.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/r8 revolver/2.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/r8 revolver/3.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/r8 revolver/4.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/r8 revolver/5.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/r8 revolver/6.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/r8 revolver/7.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/r8 revolver/8.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/r8 revolver/9.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/r8 revolver/10.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/r8 revolver/11.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/r8 revolver/12.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'usp-s',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/pistols/usp-s/1.png',
                  comparison: [
                    {
                      img: 'all/ct/pistols/usp-s/1.png',
                      title: 'usp-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/usp-s/2.png',
                      title: 'usp-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/usp-s/3.png',
                      title: 'usp-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/usp-s/4.png',
                      title: 'usp-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/usp-s/5.png',
                      title: 'usp-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/usp-s/6.png',
                      title: 'usp-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/usp-s/7.png',
                      title: 'usp-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/usp-s/8.png',
                      title: 'usp-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/usp-s/9.png',
                      title: 'usp-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/usp-s/10.png',
                      title: 'usp-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/usp-s/11.png',
                      title: 'usp-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/pistols/usp-s/12.png',
                      title: 'usp-s',
                      text: 'Stained Glass',
                    },
                  ],
                },
              ],
            },
            {
              title: 'SMGS',
              img: 'skins/item-2.png',
              weapons: [
                {
                  title: 'mp5-sd',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/smgs/mp5-sd/1.png',
                  comparison: [
                    {
                      img: 'all/ct/smgs/mp5-sd/1.png',
                      title: 'mp5-sd',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp5-sd/2.png',
                      title: 'mp5-sd',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp5-sd/3.png',
                      title: 'mp5-sd',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp5-sd/4.png',
                      title: 'mp5-sd',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp5-sd/5.png',
                      title: 'mp5-sd',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp5-sd/6.png',
                      title: 'mp5-sd',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp5-sd/7.png',
                      title: 'mp5-sd',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp5-sd/8.png',
                      title: 'mp5-sd',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp5-sd/9.png',
                      title: 'mp5-sd',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp5-sd/10.png',
                      title: 'mp5-sd',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp5-sd/11.png',
                      title: 'mp5-sd',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp5-sd/12.png',
                      title: 'mp5-sd',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'mp7',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/smgs/mp7/1.png',
                  comparison: [
                    {
                      img: 'all/ct/smgs/mp7/1.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp7/2.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp7/3.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp7/4.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp7/5.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp7/6.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp7/7.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp7/8.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp7/9.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp7/10.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp7/11.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp7/12.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'mp9',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/smgs/mp9/1.png',
                  comparison: [
                    {
                      img: 'all/ct/smgs/mp9/1.png',
                      title: 'mp9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp9/2.png',
                      title: 'mp9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp9/3.png',
                      title: 'mp9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp9/4.png',
                      title: 'mp9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp9/5.png',
                      title: 'mp9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp9/6.png',
                      title: 'mp9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp9/7.png',
                      title: 'mp9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp9/8.png',
                      title: 'mp9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp9/9.png',
                      title: 'mp9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp9/10.png',
                      title: 'mp9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp9/11.png',
                      title: 'mp9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/mp9/12.png',
                      title: 'mp9',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'p90',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/smgs/p90/1.png',
                  comparison: [
                    {
                      img: 'all/ct/smgs/p90/1.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/p90/2.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/p90/3.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/p90/4.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/p90/5.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/p90/6.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/p90/7.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/p90/8.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/p90/9.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/p90/10.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/p90/11.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/p90/12.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'pp-bizon',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/smgs/pp-bizon/1.png',
                  comparison: [
                    {
                      img: 'all/ct/smgs/pp-bizon/1.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/2.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/3.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/4.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/5.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/6.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/7.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/8.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/9.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/10.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/11.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/12.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'ump-45',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/smgs/ump-45/1.png',
                  comparison: [
                    {
                      img: 'all/ct/smgs/ump-45/1.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/ump-45/2.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/ump-45/3.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/ump-45/4.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/ump-45/5.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/ump-45/6.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/ump-45/7.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/ump-45/8.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/ump-45/9.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/ump-45/10.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/ump-45/11.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/ump-45/12.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Heavy',
              img: 'skins/item-3.png',
              weapons: [
                {
                  title: 'm249',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/heavy/m249/1.png',
                  comparison: [
                    {
                      img: 'all/ct/heavy/m249/1.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/m249/2.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/m249/3.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/m249/4.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/m249/5.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/m249/6.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/m249/7.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/m249/8.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/m249/9.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/m249/10.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/m249/11.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/m249/12.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'mag-7',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/heavy/mag-7/1.png',
                  comparison: [
                    {
                      img: 'all/ct/heavy/mag-7/1.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/mag-7/2.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/mag-7/3.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/mag-7/4.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/mag-7/5.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/mag-7/6.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/mag-7/7.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/mag-7/8.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/mag-7/9.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/mag-7/10.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/mag-7/11.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/mag-7/12.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'negev',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/heavy/negev/1.png',
                  comparison: [
                    {
                      img: 'all/ct/heavy/negev/1.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/negev/2.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/negev/3.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/negev/4.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/negev/5.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/negev/6.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/negev/7.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/negev/8.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/negev/9.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/negev/10.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/m249/11.png',
                     title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/negev/12.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'nova',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/heavy/nova/1.png',
                  comparison: [
                    {
                      img: 'all/ct/heavy/nova/1.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/nova/2.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/nova/3.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/nova/4.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/nova/5.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/nova/6.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/nova/7.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/nova/8.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/nova/9.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/nova/10.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/nova/11.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/nova/12.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'xm1014',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/heavy/xm1014/1.png',
                  comparison: [
                    {
                      img: 'all/ct/heavy/xm1014/1.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/xm1014/2.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/xm1014/3.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/xm1014/4.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/xm1014/5.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/xm1014/6.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/xm1014/7.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/xm1014/8.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/xm1014/9.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/xm1014/10.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/xm1014/11.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/heavy/xm1014/12.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Rifles',
              img: 'skins/item-4.png',
              weapons: [
                {
                  title: 'aug',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/rifles/aug/3.png',
                  comparison: [
                    {
                      img: 'all/ct/rifles/aug/1.png',
                      title: 'aug',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/aug/2.png',
                      title: 'aug',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/aug/3.png',
                      title: 'aug',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/aug/4.png',
                      title: 'aug',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/aug/5.png',
                      title: 'aug',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/aug/6.png',
                      title: 'aug',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/aug/7.png',
                      title: 'aug',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/aug/8.png',
                      title: 'aug',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/aug/9.png',
                      title: 'aug',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/aug/10.png',
                      title: 'aug',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/aug/11.png',
                      title: 'aug',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/aug/12.png',
                      title: 'aug',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'awp',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/rifles/awp/3.png',
                  comparison: [
                    {
                      img: 'all/ct/rifles/awp/1.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/awp/2.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/awp/3.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/awp/4.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/awp/5.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/awp/6.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/awp/7.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/awp/8.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/awp/9.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/awp/10.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/awp/11.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/awp/12.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'famas',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/rifles/famas/3.png',
                  comparison: [
                    {
                      img: 'all/ct/rifles/famas/1.png',
                      title: 'famas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/famas/2.png',
                      title: 'famas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/famas/3.png',
                      title: 'famas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/famas/4.png',
                      title: 'famas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/famas/5.png',
                      title: 'famas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/famas/6.png',
                      title: 'famas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/famas/7.png',
                      title: 'famas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/famas/8.png',
                      title: 'famas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/famas/9.png',
                      title: 'famas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/famas/10.png',
                      title: 'famas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/famas/11.png',
                      title: 'famas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/famas/12.png',
                      title: 'famas',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'm4a1-s',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/rifles/m4a1-s/3.png',
                  comparison: [
                    {
                      img: 'all/ct/rifles/m4a1-s/1.png',
                      title: 'm4a1-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a1-s/2.png',
                      title: 'm4a1-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a1-s/3.png',
                      title: 'm4a1-s',

                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a1-s/4.png',
                      title: 'm4a1-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a1-s/5.png',
                      title: 'm4a1-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a1-s/6.png',
                      title: 'm4a1-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a1-s/7.png',
                      title: 'm4a1-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a1-s/8.png',
                      title: 'm4a1-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a1-s/9.png',
                      title: 'm4a1-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a1-s/10.png',
                      title: 'm4a1-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a1-s/11.png',
                      title: 'm4a1-s',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a1-s/12.png',
                      title: 'm4a1-s',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'm4a4',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/rifles/m4a4/3.png',
                  comparison: [
                    {
                      img: 'all/ct/rifles/m4a4/1.png',
                      title: 'm4a4',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a4/2.png',
                      title: 'm4a4',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a4/3.png',
                      title: 'm4a4',
          
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a4/4.png',
                      title: 'm4a4',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a4/5.png',
                      title: 'm4a4',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a4/6.png',
                      title: 'm4a4',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a4/7.png',
                      title: 'm4a4',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a4/8.png',
                      title: 'm4a4',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a4/9.png',
                      title: 'm4a4',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a4/10.png',
                      title: 'm4a4',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a4/11.png',
                      title: 'm4a4',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/m4a4/12.png',
                      title: 'm4a4',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'scar-20',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/rifles/scar-20/3.png',
                  comparison: [
                    {
                      img: 'all/ct/rifles/scar-20/1.png',
                      title: 'scar-20',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/scar-20/2.png',
                      title: 'scar-20',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/scar-20/3.png',
                      title: 'scar-20',
     
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/scar-20/4.png',
                      title: 'scar-20',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/scar-20/5.png',
                      title: 'scar-20',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/scar-20/6.png',
                      title: 'scar-20',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/scar-20/7.png',
                      title: 'scar-20',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/scar-20/8.png',
                      title: 'scar-20',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/scar-20/9.png',
                      title: 'scar-20',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/scar-20/10.png',
                      title: 'scar-20',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/scar-20/11.png',
                      title: 'scar-20',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/scar-20/12.png',
                      title: 'scar-20',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'ssg 08',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/rifles/ssg 08/3.png',
                  comparison: [
                    {
                      img: 'all/ct/rifles/ssg 08/1.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/ssg 08/2.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/ssg 08/3.png',
                      title: 'ssg 08',
            
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/ssg 08/4.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/ssg 08/5.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/ssg 08/6.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/ssg 08/7.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/ssg 08/8.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/ssg 08/9.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/ssg 08/10.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/ssg 08/11.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/rifles/ssg 08/12.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                  ],
                },
              ],
            },
          ],
          improveSelects: [
            {
              title: 'Knives',
              img: 'improve/selects/item-1.png',
              skins: [
                {
                  type: [
                    {
                      img: 'all/other/knife/Bayonet/1.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/2.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/3.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/4.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/5.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/6.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/7.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/8.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/9.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/10.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/11.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/12.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/13.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/14.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/15.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/16.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/17.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/18.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/19.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/20.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/21.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/22.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/23.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/24.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/25.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/26.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/27.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/28.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/29.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/30.png',
                    },
                  ],
                },
                {
                  type: [
                    {
                      img: 'all/other/knife/Bowie/1.png',
                    },
                    {
                      img: 'all/other/knife/Bowie/2.PNG',
                    },
                    {
                      img: 'all/other/knife/Bowie/3.PNG',
                    },
                    {
                      img: 'all/other/knife/Bowie/4.PNG',
                    },
                    {
                      img: 'all/other/knife/Bowie/5.PNG',
                    },
                    {
                      img: 'all/other/knife/Bowie/6.PNG',
                    },
                    {
                      img: 'all/other/knife/Bowie/7.PNG',
                    },
                    {
                      img: 'all/other/knife/Bowie/8.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/9.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/10.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/11.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/12.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/13.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/14.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/15.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/16.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/17.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/18.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/19.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/20.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/21.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/22.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/23.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/24.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/25.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/26.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/27.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/28.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/29.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/30.PNG',
                    },
                  ],
                },
                {
                  type: [
                    {
                      img: 'all/other/knife/Butterfly/1.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/2.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/3.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/4.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/5.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/6.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/7.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/8.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/9.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/10.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/11.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/12.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/13.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/14.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/15.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/16.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/17.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/18.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/19.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/20.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/21.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/22.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/23.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/24.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/25.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/26.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/27.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/28.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/29.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/30.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'select',
              title: 'Gloves',
              img: 'improve/selects/item-2.png',
              skins: [
                {
                  type: [
                    {
                      img: 'all/other/gloves/1.png',
                    },
                            {
                      img: 'all/other/gloves/2.png',
                    },
                            {
                      img: 'all/other/gloves/3.png',
                    },        {
                      img: 'all/other/gloves/4.png',
                    }
                    ,        {
                      img: 'all/other/gloves/5.png',
                    },
                            {
                      img: 'all/other/gloves/6.png',
                    },
                                              {
                      img: 'all/other/gloves/7.png',
                    },
                                                {
                      img: 'all/other/gloves/8.png',
                    },
                                                {
                      img: 'all/other/gloves/9.png',
                    },
                                                {
                      img: 'all/other/gloves/10.png',
                    },
                                                {
                      img: 'all/other/gloves/11.png',
                    },
                                                {
                      img: 'all/other/gloves/12.png',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/gloves/13.png',
                    },
                            {
                      img: 'all/other/gloves/14.png',
                    },
                            {
                      img: 'all/other/gloves/15.png',
                    },        {
                      img: 'all/other/gloves/16.png',
                    }
                    ,        {
                      img: 'all/other/gloves/17.png',
                    },
                            {
                      img: 'all/other/gloves/18.png',
                    },
                                              {
                      img: 'all/other/gloves/19.png',
                    },
                                                {
                      img: 'all/other/gloves/20.png',
                    },
                                                {
                      img: 'all/other/gloves/21.png',
                    },
                                                {
                      img: 'all/other/gloves/22.png',
                    },
                                                {
                      img: 'all/other/gloves/23.png',
                    },
                                                {
                      img: 'all/other/gloves/24.png',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/gloves/25.png',
                    },
                            {
                      img: 'all/other/gloves/26.png',
                    },
                            {
                      img: 'all/other/gloves/27.png',
                    },        {
                      img: 'all/other/gloves/28.png',
                    }
                    ,        {
                      img: 'all/other/gloves/29.png',
                    },
                            {
                      img: 'all/other/gloves/30.png',
                    },
                                              {
                      img: 'all/other/gloves/31.png',
                    },
                                                {
                      img: 'all/other/gloves/32.png',
                    },
                                                {
                      img: 'all/other/gloves/33.png',
                    },
                                                {
                      img: 'all/other/gloves/34.png',
                    },
                                                {
                      img: 'all/other/gloves/35.png',
                    },
                                                {
                      img: 'all/other/gloves/36.png',
                    },
                  ]
                },
              ]
            },
            {
              title: 'Medals & pin',
              img: 'improve/selects/item-3.png',
              skins: [
                {
                  type: [
                    {
                      img: 'all/other/medals/1.webp',
                    },
                            {
                      img: 'all/other/medals/2.webp',
                    },
                            {
                      img: 'all/other/medals/3.webp',
                    },        {
                      img: 'all/other/medals/4.webp',
                    }
                    ,        {
                      img: 'all/other/medals/73.webp',
                    },
                            {
                      img: 'all/other/medals/6.webp',
                    },
                                              {
                      img: 'all/other/medals/7.webp',
                    },
                                                {
                      img: 'all/other/medals/8.webp',
                    },
                                                {
                      img: 'all/other/medals/9.webp',
                    },
                                                {
                      img: 'all/other/medals/10.webp',
                    },
                                                {
                      img: 'all/other/medals/11.webp',
                    },
                                                {
                      img: 'all/other/medals/12.webp',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/medals/13.webp',
                    },
                            {
                      img: 'all/other/medals/14.webp',
                    },
                            {
                      img: 'all/other/medals/15.webp',
                    },        {
                      img: 'all/other/medals/16.webp',
                    }
                    ,        {
                      img: 'all/other/medals/17.webp',
                    },
                            {
                      img: 'all/other/medals/18.webp',
                    },
                                              {
                      img: 'all/other/medals/19.webp',
                    },
                                                {
                      img: 'all/other/medals/20.webp',
                    },
                                                {
                      img: 'all/other/medals/21.webp',
                    },
                                                {
                      img: 'all/other/medals/22.webp',
                    },
                                                {
                      img: 'all/other/medals/23.webp',
                    },
                                                {
                      img: 'all/other/medals/24.webp',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/medals/25.webp',
                    },
                            {
                      img: 'all/other/medals/26.webp',
                    },
                            {
                      img: 'all/other/medals/27.webp',
                    },        {
                      img: 'all/other/medals/28.webp',
                    }
                    ,        {
                      img: 'all/other/medals/29.webp',
                    },
                            {
                      img: 'all/other/medals/30.webp',
                    },
                                              {
                      img: 'all/other/medals/31.webp',
                    },
                                                {
                      img: 'all/other/medals/32.webp',
                    },
                                                {
                      img: 'all/other/medals/33.webp',
                    },
                                                {
                      img: 'all/other/medals/34.webp',
                    },
                                                {
                      img: 'all/other/medals/35.webp',
                    },
                                                {
                      img: 'all/other/medals/36.webp',
                    },
                  ]
                },
              ]
            },
            {
              title: 'Case',
              img: 'improve/selects/item-4.png',
              skins: [
                {
                  type: [
                    {
                      img: 'all/other/cases/20.png',
                    },
                            {
                      img: 'all/other/cases/22.png',
                    },
                            {
                      img: 'all/other/cases/23.png',
                    },        {
                      img: 'all/other/cases/24.png',
                    }
                    ,        {
                      img: 'all/other/cases/25.png',
                    },
                            {
                      img: 'all/other/cases/6.png',
                    },
                                              {
                      img: 'all/other/cases/7.png',
                    },
                                                {
                      img: 'all/other/cases/8.png',
                    },
                                                {
                      img: 'all/other/cases/9.png',
                    },
                                                {
                      img: 'all/other/cases/10.png',
                    },
                                                {
                      img: 'all/other/cases/11.png',
                    },
                                                {
                      img: 'all/other/cases/12.png',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/cases/13.png',
                    },
                            {
                      img: 'all/other/cases/14.png',
                    },
                            {
                      img: 'all/other/cases/15.png',
                    },        {
                      img: 'all/other/cases/16.png',
                    }
                    ,        {
                      img: 'all/other/cases/17.png',
                    },
                            {
                      img: 'all/other/cases/18.png',
                    },
                                              {
                      img: 'all/other/cases/19.png',
                    },
                                                {
                      img: 'all/other/cases/20.png',
                    },
                                                {
                      img: 'all/other/cases/21.png',
                    },
                                                {
                      img: 'all/other/cases/22.png',
                    },
                                                {
                      img: 'all/other/cases/23.png',
                    },
                                                {
                      img: 'all/other/cases/24.png',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/cases/25.png',
                    },
                            {
                      img: 'all/other/cases/26.png',
                    },
                            {
                      img: 'all/other/cases/27.png',
                    },        {
                      img: 'all/other/cases/28.png',
                    }
                    ,        {
                      img: 'all/other/cases/29.png',
                    },
                            {
                      img: 'all/other/cases/30.png',
                    },
                                              {
                      img: 'all/other/cases/31.png',
                    },
                                                {
                      img: 'all/other/cases/32.png',
                    },
                                                {
                      img: 'all/other/cases/33.png',
                    },
                                                {
                      img: 'all/other/cases/34.png',
                    },
                                                {
                      img: 'all/other/cases/35.png',
                    },
                                                {
                      img: 'all/other/cases/36.png',
                    },
                  ]
                },
              ]
            },
            {
              title: 'Stikers',
              img: 'improve/selects/item-5.png',
              skins: [
                {
                  type: [
                    {
                      img: 'all/other/pins/1.png',
                    },
                            {
                      img: 'all/other/pins/2.png',
                    },
                            {
                      img: 'all/other/pins/3.png',
                    },        {
                      img: 'all/other/pins/4.png',
                    }
                    ,        {
                      img: 'all/other/pins/5.png',
                    },
                            {
                      img: 'all/other/pins/6.png',
                    },
                                              {
                      img: 'all/other/pins/7.png',
                    },
                                                {
                      img: 'all/other/pins/8.png',
                    },
                                                {
                      img: 'all/other/pins/9.png',
                    },
                                                {
                      img: 'all/other/pins/10.png',
                    },
                                                {
                      img: 'all/other/pins/11.png',
                    },
                                                {
                      img: 'all/other/pins/12.png',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/pins/13.png',
                    },
                            {
                      img: 'all/other/pins/14.png',
                    },
                            {
                      img: 'all/other/pins/15.png',
                    },        {
                      img: 'all/other/pins/16.png',
                    }
                    ,        {
                      img: 'all/other/pins/17.png',
                    },
                            {
                      img: 'all/other/pins/18.png',
                    },
                                              {
                      img: 'all/other/pins/19.png',
                    },
                                                {
                      img: 'all/other/pins/20.png',
                    },
                                                {
                      img: 'all/other/pins/21.png',
                    },
                                                {
                      img: 'all/other/pins/22.png',
                    },
                                                {
                      img: 'all/other/pins/23.png',
                    },
                                                {
                      img: 'all/other/pins/24.png',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/pins/25.png',
                    },
                            {
                      img: 'all/other/pins/26.png',
                    },
                            {
                      img: 'all/other/pins/27.png',
                    },        {
                      img: 'all/other/pins/28.png',
                    }
                    ,        {
                      img: 'all/other/pins/29.png',
                    },
                            {
                      img: 'all/other/pins/30.png',
                    },
                                              {
                      img: 'all/other/pins/31.png',
                    },
                                                {
                      img: 'all/other/pins/32.png',
                    },
                                                {
                      img: 'all/other/pins/33.png',
                    },
                                                {
                      img: 'all/other/pins/34.png',
                    },
                                                {
                      img: 'all/other/pins/35.png',
                    },
                                                {
                      img: 'all/other/pins/36.png',
                    },
                  ]
                },
              ]
            },
          ],
        },
        {
          name: false,
          improveAgents: [
            {
              skins: [
                {
                  type: [
                    {
                      img: 'improve/agents/agent-2.png',
                    },
                    {
                      img: 'all/other/agents/t/1.png',
                    },
                    {
                      img: 'all/other/agents/t/2.png',
                    },
                    {
                      img: 'all/other/agents/t/3.png',
                    },
                    {
                      img: 'all/other/agents/t/4.png',
                    },
                    {
                      img: 'all/other/agents/t/6.png',
                    },
                    {
                      img: 'all/other/agents/t/8.png',
                    },
                    {
                      img: 'all/other/agents/t/9.png',
                    },
                    {
                      img: 'all/other/agents/t/11.png',
                    },
                    {
                      img: 'all/other/agents/t/15.png',
                    },
                    {
                      img: 'all/other/agents/t/16.png',
                    },
                    {
                      img: 'all/other/agents/t/17.png',
                    },
                    {
                      img: 'all/other/agents/t/18.png',
                    },
                    {
                      img: 'all/other/agents/t/19.png',
                    },
                    {
                      img: 'all/other/agents/t/20.png',
                    },
                   {
                      img: 'all/other/agents/t/24.png',
                    },
                    {
                      img: 'all/other/agents/t/25.png',
                    },
                  ],
                },
                {
                  type: [
                    {
                      img: 'improve/agents/agent-2.png',
                    },
                                       {
                      img: 'all/other/agents/t/26.png',
                    },
                                        {
                      img: 'all/other/agents/t/30.png',
                    },
                                        {
                      img: 'all/other/agents/t/32.png',
                    },
                    {
                      img: 'all/other/agents/t/39.png',
                    },
                    {
                      img: 'all/other/agents/t/41.png',
                    },
                    {
                      img: 'all/other/agents/t/44.png',
                    },
                    {
                      img: 'all/other/agents/t/45.png',
                    },
                    {
                      img: 'all/other/agents/t/49.png',
                    },
                    {
                      img: 'all/other/agents/t/53.png',
                    },
                    {
                      img: 'all/other/agents/t/54.png',
                    },
                    {
                      img: 'all/other/agents/t/55.png',
                    },
                    {
                      img: 'all/other/agents/t/56.png',
                    },
                    {
                      img: 'all/other/agents/t/57.png',
                    },
                    {
                      img: 'all/other/agents/t/58.png',
                    },
                    {
                      img: 'all/other/agents/t/59.png',
                    },
                    {
                      img: 'all/other/agents/t/60.png',
                    },
                  ],
                },
              ],
            },
          ],
          improveSkins: [
            {
              title: 'Pistols',
              img: 'skins/item-5.png',
              weapons: [
                {
                  title: 'cz75-auto',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/pistols/cz75-auto/1.png',
                  comparison: [
                    {
                      img: 'all/t/pistols/cz75-auto/1.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/cz75-auto/2.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/cz75-auto/3.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/cz75-auto/4.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/cz75-auto/5.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/cz75-auto/6.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/cz75-auto/7.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/cz75-auto/8.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/cz75-auto/9.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/cz75-auto/10.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/cz75-auto/11.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/cz75-auto/12.png',
                      title: 'cz75-auto',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'deagle',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/pistols/deagle/1.png',
                  comparison: [
                    {
                      img: 'all/t/pistols/deagle/1.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/deagle/2.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/deagle/3.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/deagle/4.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/deagle/5.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/deagle/6.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/deagle/7.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/deagle/8.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/deagle/9.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/deagle/10.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/deagle/11.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/deagle/12.png',
                      title: 'deagle',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'dual berettas',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/pistols/dual berettas/1.png',
                  comparison: [
                    {
                      img: 'all/t/pistols/dual berettas/1.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/dual berettas/2.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/dual berettas/3.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/dual berettas/4.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/dual berettas/5.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/dual berettas/6.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/dual berettas/7.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/dual berettas/8.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/dual berettas/9.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/dual berettas/10.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/dual berettas/11.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/dual berettas/12.png',
                      title: 'dual berettas',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'glock-18',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/pistols/glock-18/3.png',
                  comparison: [
                    {
                      img: 'all/t/pistols/glock-18/1.png',
                      title: 'glock-18',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/glock-18/2.png',
                      title: 'glock-18',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/glock-18/3.png',
                      title: 'glock-18',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/glock-18/4.png',
                      title: 'glock-18',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/glock-18/5.png',
                      title: 'glock-18',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/glock-18/6.png',
                      title: 'glock-18',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/glock-18/7.png',
                      title: 'glock-18',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/glock-18/8.png',
                      title: 'glock-18',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/glock-18/9.png',
                      title: 'glock-18',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/glock-18/10.png',
                      title: 'glock-18',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/glock-18/11.png',
                      title: 'glock-18',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/glock-18/12.png',
                      title: 'glock-18',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'p250',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/pistols/p250/1.png',
                  comparison: [
                    {
                      img: 'all/t/pistols/p250/1.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/p250/2.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/p250/3.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/p250/4.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/p250/5.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/p250/6.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/p250/7.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/p250/8.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/p250/9.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/p250/10.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/p250/11.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/p250/12.png',
                      title: 'p250',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'r8 revolver',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/pistols/r8 revolver/1.png',
                  comparison: [
                    {
                      img: 'all/t/pistols/r8 revolver/1.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/r8 revolver/2.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/r8 revolver/3.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/r8 revolver/4.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/r8 revolver/5.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/r8 revolver/6.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/r8 revolver/7.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/r8 revolver/8.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/r8 revolver/9.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/r8 revolver/10.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/r8 revolver/11.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/r8 revolver/12.png',
                      title: 'r8 revolver',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'tec-9',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/pistols/tec-9/1.png',
                  comparison: [
                    {
                      img: 'all/t/pistols/tec-9/1.png',
                      title: 'tec-9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/tec-9/2.png',
                      title: 'tec-9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/tec-9/3.png',
                      title: 'tec-9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/tec-9/4.png',
                      title: 'tec-9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/tec-9/5.png',
                      title: 'tec-9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/tec-9/6.png',
                      title: 'tec-9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/tec-9/7.png',
                      title: 'tec-9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/tec-9/8.png',
                      title: 'tec-9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/tec-9/9.png',
                      title: 'tec-9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/tec-9/10.png',
                      title: 'tec-9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/tec-9/11.png',
                      title: 'tec-9',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/pistols/tec-9/12.png',
                      title: 'tec-9',
                      text: 'Stained Glass',
                    },
                  ],
                },
              ],
            },
            {
              title: 'SMGS',
                img: 'skins/item-6.png',
              weapons: [
                {
                  title: 'mac-10',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/smgs/mac-10/1.png',
                  comparison: [
                    {
                      img: 'all/t/smgs/mac-10/2.png',
                      title: 'mac-10',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mac-10/2.png',
                      title: 'mac-10',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mac-10/3.png',
                      title: 'mac-10',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mac-10/4.png',
                      title: 'mac-10',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mac-10/5.png',
                      title: 'mac-10',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mac-10/6.png',
                      title: 'mac-10',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mac-10/7.png',
                      title: 'mac-10',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mac-10/8.png',
                      title: 'mac-10',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mac-10/9.png',
                      title: 'mac-10',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mac-10/10.png',
                      title: 'mac-10',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mac-10/11.png',
                      title: 'mac-10',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mac-10/12.png',
                      title: 'mac-10',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'mp7',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/smgs/mp7/1.png',
                  comparison: [
                    {
                      img: 'all/t/smgs/mp7/1.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mp7/2.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mp7/3.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mp7/4.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mp7/5.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mp7/6.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mp7/7.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mp7/8.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mp7/9.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mp7/10.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mp7/11.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/mp7/12.png',
                      title: 'mp7',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'p90',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/smgs/p90/1.png',
                  comparison: [
                    {
                      img: 'all/t/smgs/p90/1.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/p90/2.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/p90/3.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/p90/4.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/p90/5.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/p90/6.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/p90/7.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/p90/8.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/p90/9.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/p90/10.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/p90/11.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/p90/12.png',
                      title: 'p90',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'pp-bizon',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/ct/smgs/pp-bizon/1.png',
                  comparison: [
                    {
                      img: 'all/ct/smgs/pp-bizon/1.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/2.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/3.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/4.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/5.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/6.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/7.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/8.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/9.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/10.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/11.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/ct/smgs/pp-bizon/12.png',
                      title: 'pp-bizon',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'ump-45',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/smgs/ump-45/1.png',
                  comparison: [
                    {
                      img: 'all/t/smgs/ump-45/1.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/ump-45/2.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/ump-45/3.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/ump-45/4.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/ump-45/5.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/ump-45/6.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/ump-45/7.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/ump-45/8.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/ump-45/9.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/ump-45/10.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/ump-45/11.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/smgs/ump-45/12.png',
                      title: 'ump-45',
                      text: 'Stained Glass',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Heavy',
              img: 'skins/item-7.png',
              weapons: [
                {
                  title: 'm249',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/heavy/m249/1.png',
                  comparison: [
                    {
                      img: 'all/t/heavy/m249/1.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/m249/2.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/m249/3.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/m249/4.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/m249/5.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/m249/6.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/m249/7.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/m249/8.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/m249/9.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/m249/10.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/m249/11.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/m249/12.png',
                      title: 'm249',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'negev',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/heavy/negev/1.png',
                  comparison: [
                    {
                      img: 'all/t/heavy/negev/1.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/negev/2.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/negev/3.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/negev/4.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/negev/5.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/negev/6.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/negev/7.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/negev/8.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/negev/9.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/negev/10.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/negev/11.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/negev/12.png',
                      title: 'negev',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'nova',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/heavy/nova/1.png',
                  comparison: [
                    {
                      img: 'all/t/heavy/nova/1.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/nova/2.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/nova/3.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/nova/4.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/nova/5.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/nova/6.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/nova/7.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/nova/8.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/nova/9.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/nova/10.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/nova/11.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/nova/12.png',
                      title: 'nova',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'sawed-off',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/heavy/sawed-off/1.png',
                  comparison: [
                    {
                      img: 'all/t/heavy/sawed-off/1.png',
                      title: 'sawed-off',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/sawed-off/2.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/sawed-off/3.png',
                      title: 'sawed-off',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/sawed-off/4.png',
                      title: 'sawed-off',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/sawed-off/5.png',
                      title: 'sawed-off',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/sawed-off/6.png',
                      title: 'sawed-off',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/sawed-off/7.png',
                      title: 'sawed-off',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/sawed-off/8.png',
                      title: 'sawed-off',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/sawed-off/9.png',
                      title: 'sawed-off',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/sawed-off/10.png',
                      title: 'sawed-off',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/sawed-off/11.png',
                      title: 'sawed-off',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/sawed-off/12.png',
                      title: 'sawed-off',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'xm1014',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/heavy/xm1014/1.png',
                  comparison: [
                    {
                      img: 'all/t/heavy/xm1014/1.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/xm1014/2.png',
                      title: 'mag-7',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/xm1014/3.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/xm1014/4.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/xm1014/5.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/xm1014/6.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/xm1014/7.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/xm1014/8.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/xm1014/9.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/xm1014/10.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/xm1014/11.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/heavy/xm1014/12.png',
                      title: 'xm1014',
                      text: 'Stained Glass',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Rifles',
              img: 'skins/item-8.png',
              weapons: [
                {
                  title: 'ak-47',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/rifles/ak-47/3.png',
                  comparison: [
                    {
                      img: 'all/t/rifles/ak-47/1.png',
                      title: 'ak-47',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ak-47/2.png',
                      title: 'ak-47',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ak-47/3.png',
                      title: 'ak-47',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ak-47/4.png',
                      title: 'ak-47',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ak-47/5.png',
                      title: 'ak-47',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ak-47/6.png',
                      title: 'ak-47',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ak-47/7.png',
                      title: 'ak-47',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ak-47/8.png',
                      title: 'ak-47',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ak-47/9.png',
                      title: 'ak-47',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ak-47/10.png',
                      title: 'ak-47',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ak-47/11.png',
                      title: 'ak-47',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ak-47/12.png',
                      title: 'ak-47',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'awp',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/rifles/awp/3.png',
                  comparison: [
                    {
                      img: 'all/t/rifles/awp/1.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/awp/2.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/awp/3.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/awp/4.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/awp/5.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/awp/6.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/awp/7.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/awp/8.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/awp/9.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/awp/10.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/awp/11.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/awp/12.png',
                      title: 'awp',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'g3sg1',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/rifles/g3sg1/3.png',
                  comparison: [
                    {
                      img: 'all/t/rifles/g3sg1/1.png',
                      title: 'g3sg1',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/g3sg1/2.png',
                      title: 'g3sg1',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/g3sg1/3.png',
                      title: 'g3sg1',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/g3sg1/4.png',
                      title: 'g3sg1',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/g3sg1/5.png',
                      title: 'g3sg1',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/g3sg1/6.png',
                      title: 'g3sg1',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/g3sg1/7.png',
                      title: 'g3sg1',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/g3sg1/8.png',
                      title: 'g3sg1',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/g3sg1/9.png',
                      title: 'g3sg1',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/g3sg1/10.png',
                      title: 'g3sg1',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/g3sg1/11.png',
                      title: 'g3sg1',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/g3sg1/12.png',
                      title: 'g3sg1',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'galil ar',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/rifles/galil ar/3.png',
                  comparison: [
                    {
                      img: 'all/t/rifles/galil ar/1.png',
                      title: 'galil ar',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/galil ar/2.png',
                      title: 'galil ar',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/galil ar/3.png',
                      title: 'galil ar',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/galil ar/4.png',
                      title: 'galil ar',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/galil ar/5.png',
                      title: 'galil ar',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/galil ar/6.png',
                      title: 'galil ar',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/galil ar/7.png',
                      title: 'galil ar',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/galil ar/8.png',
                      title: 'galil ar',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/galil ar/9.png',
                      title: 'galil ar',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/galil ar/10.png',
                      title: 'galil ar',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/galil ar/11.png',
                      title: 'galil ar',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/galil ar/12.png',
                      title: 'galil ar',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'sg 553',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/rifles/sg 553/3.png',
                  comparison: [
                    {
                      img: 'all/t/rifles/sg 553/1.png',
                      title: 'sg 553',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/sg 553/2.png',
                      title: 'sg 553',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/sg 553/3.png',
                      title: 'sg 553',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/sg 553/4.png',
                      title: 'sg 553',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/sg 553/5.png',
                      title: 'sg 553',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/sg 553/6.png',
                      title: 'sg 553',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/sg 553/7.png',
                      title: 'sg 553',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/sg 553/8.png',
                      title: 'sg 553',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/sg 553/9.png',
                      title: 'sg 553',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/sg 553/10.png',
                      title: 'sg 553',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/sg 553/11.png',
                      title: 'sg 553',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/sg 553/12.png',
                      title: 'sg 553',
                      text: 'Stained Glass',
                    },
                  ],
                },
                {
                  title: 'ssg 08',
                  text: 'Stained Glass',
                  counter: 12,
                  img: 'all/t/rifles/ssg 08/3.png',
                  comparison: [
                    {
                      img: 'all/t/rifles/ssg 08/1.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ssg 08/2.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ssg 08/3.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ssg 08/4.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ssg 08/5.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ssg 08/6.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ssg 08/7.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ssg 08/8.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ssg 08/9.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ssg 08/10.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ssg 08/11.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                    {
                      img: 'all/t/rifles/ssg 08/12.png',
                      title: 'ssg 08',
                      text: 'Stained Glass',
                    },
                  ],
                },
              ],
            },
          ],
          improveSelects: [
            {
              title: 'Knives',
              img: 'improve/selects/item-6.png',
              skins: [
                {
                  type: [
                    {
                      img: 'all/other/knife/Bayonet/1.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/2.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/3.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/4.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/5.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/6.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/7.png',
                    },
                    {
                      img: 'all/other/knife/Bayonet/8.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/9.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/10.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/11.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/12.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/13.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/14.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/15.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/16.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/17.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/18.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/19.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/20.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/21.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/22.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/23.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/24.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/25.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/26.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/27.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/28.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/29.png',
                    },
                                        {
                      img: 'all/other/knife/Bayonet/30.png',
                    },
                  ],
                },
                {
                  type: [
                    {
                      img: 'all/other/knife/Bowie/1.png',
                    },
                    {
                      img: 'all/other/knife/Bowie/2.PNG',
                    },
                    {
                      img: 'all/other/knife/Bowie/3.PNG',
                    },
                    {
                      img: 'all/other/knife/Bowie/4.PNG',
                    },
                    {
                      img: 'all/other/knife/Bowie/5.PNG',
                    },
                    {
                      img: 'all/other/knife/Bowie/6.PNG',
                    },
                    {
                      img: 'all/other/knife/Bowie/7.PNG',
                    },
                    {
                      img: 'all/other/knife/Bowie/8.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/9.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/10.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/11.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/12.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/13.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/14.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/15.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/16.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/17.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/18.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/19.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/20.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/21.PNG',
                    },
                                        {
                      img: 'all/other/knife/Bowie/22.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/23.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/24.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/25.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/26.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/27.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/28.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/29.PNG',
                    },
                                                            {
                      img: 'all/other/knife/Bowie/30.PNG',
                    },
                  ],
                },
                {
                  type: [
                    {
                      img: 'all/other/knife/Butterfly/1.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/2.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/3.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/4.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/5.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/6.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/7.png',
                    },
                    {
                      img: 'all/other/knife/Butterfly/8.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/9.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/10.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/11.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/12.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/13.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/14.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/15.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/16.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/17.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/18.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/19.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/20.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/21.png',
                    },
                                        {
                      img: 'all/other/knife/Butterfly/22.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/23.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/24.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/25.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/26.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/27.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/28.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/29.png',
                    },
                                                            {
                      img: 'all/other/knife/Butterfly/30.png',
                    },
                  ],
                },
              ],
            },
            {
              name: 'select',
              title: 'Gloves',
              img: 'improve/selects/item-7.png',
              skins: [
                {
                  type: [
                    {
                      img: 'all/other/gloves/1.png',
                    },
                            {
                      img: 'all/other/gloves/2.png',
                    },
                            {
                      img: 'all/other/gloves/3.png',
                    },        {
                      img: 'all/other/gloves/4.png',
                    }
                    ,        {
                      img: 'all/other/gloves/5.png',
                    },
                            {
                      img: 'all/other/gloves/6.png',
                    },
                                              {
                      img: 'all/other/gloves/7.png',
                    },
                                                {
                      img: 'all/other/gloves/8.png',
                    },
                                                {
                      img: 'all/other/gloves/9.png',
                    },
                                                {
                      img: 'all/other/gloves/10.png',
                    },
                                                {
                      img: 'all/other/gloves/11.png',
                    },
                                                {
                      img: 'all/other/gloves/12.png',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/gloves/13.png',
                    },
                            {
                      img: 'all/other/gloves/14.png',
                    },
                            {
                      img: 'all/other/gloves/15.png',
                    },        {
                      img: 'all/other/gloves/16.png',
                    }
                    ,        {
                      img: 'all/other/gloves/17.png',
                    },
                            {
                      img: 'all/other/gloves/18.png',
                    },
                                              {
                      img: 'all/other/gloves/19.png',
                    },
                                                {
                      img: 'all/other/gloves/20.png',
                    },
                                                {
                      img: 'all/other/gloves/21.png',
                    },
                                                {
                      img: 'all/other/gloves/22.png',
                    },
                                                {
                      img: 'all/other/gloves/23.png',
                    },
                                                {
                      img: 'all/other/gloves/24.png',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/gloves/25.png',
                    },
                            {
                      img: 'all/other/gloves/26.png',
                    },
                            {
                      img: 'all/other/gloves/27.png',
                    },        {
                      img: 'all/other/gloves/28.png',
                    }
                    ,        {
                      img: 'all/other/gloves/29.png',
                    },
                            {
                      img: 'all/other/gloves/30.png',
                    },
                                              {
                      img: 'all/other/gloves/31.png',
                    },
                                                {
                      img: 'all/other/gloves/32.png',
                    },
                                                {
                      img: 'all/other/gloves/33.png',
                    },
                                                {
                      img: 'all/other/gloves/34.png',
                    },
                                                {
                      img: 'all/other/gloves/35.png',
                    },
                                                {
                      img: 'all/other/gloves/36.png',
                    },
                  ]
                },
              ]
            },
            {
              title: 'Medals & pin',
              img: 'improve/selects/item-8.png',
              skins: [
                {
                  type: [
                    {
                      img: 'all/other/medals/1.webp',
                    },
                            {
                      img: 'all/other/medals/2.webp',
                    },
                            {
                      img: 'all/other/medals/3.webp',
                    },        {
                      img: 'all/other/medals/4.webp',
                    }
                    ,        {
                      img: 'all/other/medals/73.webp',
                    },
                            {
                      img: 'all/other/medals/6.webp',
                    },
                                              {
                      img: 'all/other/medals/7.webp',
                    },
                                                {
                      img: 'all/other/medals/8.webp',
                    },
                                                {
                      img: 'all/other/medals/9.webp',
                    },
                                                {
                      img: 'all/other/medals/10.webp',
                    },
                                                {
                      img: 'all/other/medals/11.webp',
                    },
                                                {
                      img: 'all/other/medals/12.webp',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/medals/13.webp',
                    },
                            {
                      img: 'all/other/medals/14.webp',
                    },
                            {
                      img: 'all/other/medals/15.webp',
                    },        {
                      img: 'all/other/medals/16.webp',
                    }
                    ,        {
                      img: 'all/other/medals/17.webp',
                    },
                            {
                      img: 'all/other/medals/18.webp',
                    },
                                              {
                      img: 'all/other/medals/19.webp',
                    },
                                                {
                      img: 'all/other/medals/20.webp',
                    },
                                                {
                      img: 'all/other/medals/21.webp',
                    },
                                                {
                      img: 'all/other/medals/22.webp',
                    },
                                                {
                      img: 'all/other/medals/23.webp',
                    },
                                                {
                      img: 'all/other/medals/24.webp',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/medals/25.webp',
                    },
                            {
                      img: 'all/other/medals/26.webp',
                    },
                            {
                      img: 'all/other/medals/27.webp',
                    },        {
                      img: 'all/other/medals/28.webp',
                    }
                    ,        {
                      img: 'all/other/medals/29.webp',
                    },
                            {
                      img: 'all/other/medals/30.webp',
                    },
                                              {
                      img: 'all/other/medals/31.webp',
                    },
                                                {
                      img: 'all/other/medals/32.webp',
                    },
                                                {
                      img: 'all/other/medals/33.webp',
                    },
                                                {
                      img: 'all/other/medals/34.webp',
                    },
                                                {
                      img: 'all/other/medals/35.webp',
                    },
                                                {
                      img: 'all/other/medals/36.webp',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/medals/37.webp',
                    },
                            {
                      img: 'all/other/medals/38.webp',
                    },
                            {
                      img: 'all/other/medals/39.webp',
                    },        {
                      img: 'all/other/medals/40.webp',
                    }
                    ,        {
                      img: 'all/other/medals/41.webp',
                    },
                            {
                      img: 'all/other/medals/42.webp',
                    },
                                              {
                      img: 'all/other/medals/43.webp',
                    },
                                                {
                      img: 'all/other/medals/44.webp',
                    },
                                                {
                      img: 'all/other/medals/73.webp',
                    },
                                                {
                      img: 'all/other/medals/46.webp',
                    },
                                                {
                      img: 'all/other/medals/47.webp',
                    },
                                                {
                      img: 'all/other/medals/48.webp',
                    },
                  ]
                },
              ]
            },
            {
              title: 'Case',
              img: 'improve/selects/item-9.png',
              skins: [
                {
                  type: [
                    {
                      img: 'all/other/cases/20.png',
                    },
                            {
                      img: 'all/other/cases/22.png',
                    },
                            {
                      img: 'all/other/cases/23.png',
                    },        {
                      img: 'all/other/cases/24.png',
                    }
                    ,        {
                      img: 'all/other/cases/25.png',
                    },
                            {
                      img: 'all/other/cases/6.png',
                    },
                                              {
                      img: 'all/other/cases/7.png',
                    },
                                                {
                      img: 'all/other/cases/8.png',
                    },
                                                {
                      img: 'all/other/cases/9.png',
                    },
                                                {
                      img: 'all/other/cases/10.png',
                    },
                                                {
                      img: 'all/other/cases/11.png',
                    },
                                                {
                      img: 'all/other/cases/12.png',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/cases/13.png',
                    },
                            {
                      img: 'all/other/cases/14.png',
                    },
                            {
                      img: 'all/other/cases/15.png',
                    },        {
                      img: 'all/other/cases/16.png',
                    }
                    ,        {
                      img: 'all/other/cases/17.png',
                    },
                            {
                      img: 'all/other/cases/18.png',
                    },
                                              {
                      img: 'all/other/cases/19.png',
                    },
                                                {
                      img: 'all/other/cases/20.png',
                    },
                                                {
                      img: 'all/other/cases/21.png',
                    },
                                                {
                      img: 'all/other/cases/22.png',
                    },
                                                {
                      img: 'all/other/cases/23.png',
                    },
                                                {
                      img: 'all/other/cases/24.png',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/cases/25.png',
                    },
                            {
                      img: 'all/other/cases/26.png',
                    },
                            {
                      img: 'all/other/cases/27.png',
                    },        {
                      img: 'all/other/cases/28.png',
                    }
                    ,        {
                      img: 'all/other/cases/29.png',
                    },
                            {
                      img: 'all/other/cases/30.png',
                    },
                                              {
                      img: 'all/other/cases/31.png',
                    },
                                                {
                      img: 'all/other/cases/32.png',
                    },
                                                {
                      img: 'all/other/cases/33.png',
                    },
                                                {
                      img: 'all/other/cases/34.png',
                    },
                                                {
                      img: 'all/other/cases/35.png',
                    },
                                                {
                      img: 'all/other/cases/36.png',
                    },
                  ]
                },
              ]
            },
            {
              title: 'Stikers',
              img: 'improve/selects/item-10.png',
                 skins: [
                {
                  type: [
                    {
                      img: 'all/other/pins/1.png',
                    },
                            {
                      img: 'all/other/pins/2.png',
                    },
                            {
                      img: 'all/other/pins/3.png',
                    },        {
                      img: 'all/other/pins/4.png',
                    }
                    ,        {
                      img: 'all/other/pins/5.png',
                    },
                            {
                      img: 'all/other/pins/6.png',
                    },
                                              {
                      img: 'all/other/pins/7.png',
                    },
                                                {
                      img: 'all/other/pins/8.png',
                    },
                                                {
                      img: 'all/other/pins/9.png',
                    },
                                                {
                      img: 'all/other/pins/10.png',
                    },
                                                {
                      img: 'all/other/pins/11.png',
                    },
                                                {
                      img: 'all/other/pins/12.png',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/pins/13.png',
                    },
                            {
                      img: 'all/other/pins/14.png',
                    },
                            {
                      img: 'all/other/pins/15.png',
                    },        {
                      img: 'all/other/pins/16.png',
                    }
                    ,        {
                      img: 'all/other/pins/17.png',
                    },
                            {
                      img: 'all/other/pins/18.png',
                    },
                                              {
                      img: 'all/other/pins/19.png',
                    },
                                                {
                      img: 'all/other/pins/20.png',
                    },
                                                {
                      img: 'all/other/pins/21.png',
                    },
                                                {
                      img: 'all/other/pins/22.png',
                    },
                                                {
                      img: 'all/other/pins/23.png',
                    },
                                                {
                      img: 'all/other/pins/24.png',
                    },
                  ]
                },
                {
                  type: [
                    {
                      img: 'all/other/pins/25.png',
                    },
                            {
                      img: 'all/other/pins/26.png',
                    },
                            {
                      img: 'all/other/pins/27.png',
                    },        {
                      img: 'all/other/pins/28.png',
                    }
                    ,        {
                      img: 'all/other/pins/29.png',
                    },
                            {
                      img: 'all/other/pins/30.png',
                    },
                                              {
                      img: 'all/other/pins/31.png',
                    },
                                                {
                      img: 'all/other/pins/32.png',
                    },
                                                {
                      img: 'all/other/pins/33.png',
                    },
                                                {
                      img: 'all/other/pins/34.png',
                    },
                                                {
                      img: 'all/other/pins/35.png',
                    },
                                                {
                      img: 'all/other/pins/36.png',
                    },
                  ]
                },
              ]
            },
          ],
        },
      ],
    }
  },
}
</script>
