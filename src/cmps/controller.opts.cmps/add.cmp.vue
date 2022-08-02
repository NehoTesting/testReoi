<template>
  <section class="controller-add">
    <el-collapse accordion>
      <ul
        class="pointer add-list"
        v-for="cmp in cmpsAccordion"
        :key="cmp.value"
      >
        <div @click="setCmpsToShow(cmp.value)">
          <el-collapse-item :name="cmp.value">
            <template slot="title">
              <li><i :class="cmp.iconClass"></i>{{ cmp.title }}</li>
            </template>
            <section class="cmpsExamples" v-if="cmps">
              <draggable
                class="dragArea list-group"
                :group="{
                  name: 'workspace-cmps',
                  pull: 'clone',
                  put: false,
                }"
                :list="cmps"
                :sort="false"
                @start="startDrag"
                @end="stopDrag"
                ghost-class="ghost"
              >
                <div v-for="cmp in cmps" :key="cmp.id">
                  <ul class="put-icon">
                    <li class="list-group-item add-options-btn">
                      <span v-if="!cmp.previewImg">
                        {{ cmp.id }}
                      </span>
                      <span v-else
                        ><img class="add-prev-img" :src="cmp.previewImg" alt=""
                      /></span>
                      <img
                        class="drag-image"
                        src="../../assets/drag002.png"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </draggable>
            </section>
          </el-collapse-item>
        </div>
      </ul>
    </el-collapse>
  </section>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import draggable from 'vuedraggable';

export default {
  name: 'controller-add',
  components: {
    draggable,
  },
  data() {
    return {
      cmpsToShow: null,
      cmpsAccordion: [
        { title: 'Navbars', value: 'navbar', iconClass: 'el-icon-more' },
        {
          title: 'Headers',
          value: 'header',
          iconClass: 'el-icon-c-scale-to-original',
        },
        { title: 'Sections', value: 'section', iconClass: 'el-icon-menu' },
        { title: 'Cards', value: 'card', iconClass: 'el-icon-copy-document' },
        { title: 'Text', value: 'text', iconClass: 'el-icon-chat-line-square' },
        { title: 'Map', value: 'map', iconClass: 'el-icon-location-outline' },
        {
          title: 'Image',
          value: 'image',
          iconClass: 'el-icon-picture-outline',
        },
        { title: 'Video', value: 'video', iconClass: 'el-icon-video-play' },
        { title: 'Form', value: 'form', iconClass: 'el-icon-message' },
        {
          title: 'Footers',
          value: 'footer',
          iconClass: 'el-icon-more-outline',
        },
      ],
      numForCmpsAccordion: 2,
      number: 1,
      isGrabbing: false,
      isHover: false,
      dragging: false,
    };
  },
  methods: {
    setCmpsToShow(name) {
      eventBus.$emit('setCmpsToShow', name);
    },
    startDrag() {
      this.dragging = true;
      eventBus.$emit('dragStart');
    },
    stopDrag() {
      eventBus.$emit('dragStop');
      this.dragging = false;
    },
  },
  computed: {
    cmps() {
      return this.$store.getters.cmps;
    },
  },
};
</script>