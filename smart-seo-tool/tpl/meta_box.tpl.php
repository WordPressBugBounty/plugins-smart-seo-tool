<div class="wbp-content">
  <div class="sc-body">
    <table class="wbsst-form-table">
      <tbody>
        <tr>
          <th class="row w8em"><?php _ex('标题', 'meta box', WB_SST_TD); ?></th>
          <td>
            <div class="seo-setitem wbsst-with-count">
              <input name="wb_sst_seo[0]" class="wbsst-input sst-skt-input wbsst-title" value="<?php echo $sst_opt['title']; ?>" data-max="60" type="text">
              <span class="wbsst-count"></span>
            </div>
            <p class="description">
              <?php _ex('不超30个中文字符，建议15-30为宜。', 'meta box', WB_SST_TD); ?>
            </p>
          </td>
        </tr>

        <tr>
          <th><?php _ex('关键词', 'meta box', WB_SST_TD); ?></th>
          <td>
            <div class="wbsst-tags-module">
              <input name="wb_sst_seo[1]" class="wbsst-input wbsst-keywords" type="hidden" value="<?php echo $sst_opt['keywords']; ?>"
                placeholder="">
              <span class="wbsst-count"></span>

              <label class="wbsst-tags-ctrl">
                <div class="wbsst-tag-items"></div>
                <input type="text" placeholder="<?php _ex('输入选项值, 回车确认 *', 'meta box', WB_SST_TD); ?>" class="wbsst-tag-input sst-skt-input">
              </label>

            </div>
            <p class="description">
              <?php _ex('建议3-5个为宜，切勿进行关键词堆叠。', 'meta box', WB_SST_TD); ?>
            </p>
          </td>
        </tr>

        <tr>
          <th><?php _ex('描述', 'meta box', WB_SST_TD); ?></th>
          <td>
            <div class="seo-setitem wbsst-with-count mt">
              <textarea class="wbsst-input wbsst-desc" rows="5" cols="42" name="wb_sst_seo[2]"
                data-max="200"><?php echo $sst_opt['description']; ?></textarea>
              <span class="wbsst-count"></span>
            </div>
            <p class="description">
              <?php _ex('不超100个中文字符，建议50-100字为宜。', 'meta box', WB_SST_TD); ?>
            </p>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <p class="description"><?php _ex('* 若单独设置文章或者独立页面SEO信息，则SEO插件通用规则对此URL无效。', 'meta box', WB_SST_TD); ?></p>
            <p class="description">
              <?php
              $skt_plugins = '<a class="link" href="' . admin_url('plugin-install.php?s=Wbolt+smart+keywords+tool&tab=search&type=term') . '" target="_blank">' . _x('热门关键词推荐插件', 'meta box', WB_SST_TD) . '</a>';
              printf(_x('* 推荐安装%s，提升SEO优化效率。', 'meta box, %s为smart keywords', WB_SST_TD), $skt_plugins);
              ?>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>